import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-100 text-primary-800',
        secondary: 'bg-secondary-100 text-secondary-800',
        success: 'bg-success-50 text-success-600',
        warning: 'bg-warning-50 text-warning-600',
        error: 'bg-error-50 text-error-600',
        info: 'bg-info-50 text-info-600',
      },
      size: {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-2.5 py-0.5',
        lg: 'text-base px-3 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  children: React.ReactNode;
}

export const Tag = ({
  className,
  variant,
  size,
  children,
  ...props
}: TagProps) => {
  return (
    <span
      className={twMerge(tagVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </span>
  );
};