import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import React ,{ Fragment, forwardRef } from 'react';

const breadcrumbsVariants = cva(
  'flex items-center text-sm',
  {
    variants: {
      variant: {
        default: 'text-surface-foreground/60',
        emphasized: 'text-surface-foreground/70 font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const breadcrumbItemVariants = cva(
  'inline-flex items-center',
  {
    variants: {
      variant: {
        default: 'hover:text-surface-foreground transition-colors',
        emphasized: 'hover:text-surface-foreground transition-colors',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const breadcrumbSeparatorVariants = cva(
  'mx-2 text-surface-foreground/40',
  {
    variants: {
      variant: {
        default: '',
        emphasized: 'font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbsVariants> {
  separator?: React.ReactNode;
  children: React.ReactNode;
}

export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof breadcrumbItemVariants> {
  href?: string;
  children: React.ReactNode;
  isCurrent?: boolean;
}

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, variant, separator = '/', children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={twMerge(breadcrumbsVariants({ variant, className }))}
        {...props}
      >
        <ol className="flex items-center space-x-2">
          {childrenArray.map((child, index) => {
            const isLastItem = index === childrenArray.length - 1;
            
            return (
              <Fragment key={index}>
                <li>{child}</li>
                {!isLastItem && (
                  <li 
                    aria-hidden="true"
                    className={twMerge(breadcrumbSeparatorVariants({ variant }))}
                  >
                    {separator}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ className, variant, href, isCurrent, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={twMerge(
          breadcrumbItemVariants({ variant, className }),
          isCurrent && 'font-medium text-surface-foreground pointer-events-none'
        )}
        aria-current={isCurrent ? 'page' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
