import { createContext, useContext, useId, useState, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const accordionContext = createContext<{ 
  expandedId: string;
  toggleItem: (id: string) => void;
}>({ 
  expandedId: '', 
  toggleItem: () => {} 
});

const triggerVariants = cva(
  'flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        default: 'border-b',
        separated: 'border rounded-lg px-4 mb-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const contentVariants = cva(
  'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: {
      variant: {
        default: 'border-b pb-4 pt-0',
        separated: 'border rounded-lg p-4 mt-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AccordionProps extends VariantProps<typeof triggerVariants> {
  defaultValue?: string;
  children: ReactNode;
  className?: string;
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  className?: string;
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Accordion({ defaultValue = '', variant, children, className }: AccordionProps) {
  const [expandedId, setExpandedId] = useState(defaultValue);
  
  const toggleItem = (id: string) => {
    setExpandedId(prevId => prevId === id ? '' : id);
  };
  
  return (
    <accordionContext.Provider value={{ expandedId, toggleItem }}>
      <div className={twMerge('', className)}>
        {children}
      </div>
    </accordionContext.Provider>
  );
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { expandedId } = useContext(accordionContext);
  const isExpanded = expandedId === value;
  
  return (
    <div 
      className={twMerge('', className)} 
      data-state={isExpanded ? "open" : "closed"}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const { expandedId, toggleItem } = useContext(accordionContext);
  const isExpanded = expandedId === props['aria-controls'];
  const id = useId();
  const controlsId = props['aria-controls'] || `content-${id}`;
  
  return (
    <button
      type="button"
      aria-expanded={isExpanded}
      aria-controls={controlsId}
      className={twMerge(triggerVariants({ variant: props.variant, className }))}
      onClick={() => toggleItem(controlsId)}
      data-state={isExpanded ? "open" : "closed"}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 transition-transform duration-200"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  const { expandedId } = useContext(accordionContext);
  const id = props.id || useId();
  const isExpanded = expandedId === id;
  
  return (
    <div
      id={id}
      className={twMerge(contentVariants({ variant: props.variant, className }))}
      data-state={isExpanded ? "open" : "closed"}
      style={{ display: isExpanded ? "block" : "none" }}
      {...props}
    >
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
}