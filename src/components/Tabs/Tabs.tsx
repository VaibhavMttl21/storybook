import { createContext, useContext, useId, useState, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const tabsContext = createContext<{ 
  selectedId: string;
  setSelectedId: (id: string) => void;
}>({ 
  selectedId: '',
  setSelectedId: () => {} 
});

const tabListVariants = cva(
  'flex rounded-lg p-1 gap-1',
  {
    variants: {
      variant: {
        default: 'bg-surface-card',
        pills: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabTriggerVariants = cva(
  'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium ring-offset-surface-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=active]:bg-white data-[state=active]:text-primary-600 data-[state=active]:shadow-sm',
        pills: 'data-[state=active]:bg-primary-100 data-[state=active]:text-primary-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface TabsProps extends VariantProps<typeof tabListVariants> {
  defaultValue: string;
  children: ReactNode;
  className?: string;
}

interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: ReactNode;
  className?: string;
}

interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: ReactNode;
  className?: string;
}

export function Tabs({ defaultValue, variant, children, className }: TabsProps) {
  const [selectedId, setSelectedId] = useState(defaultValue);
  
  return (
    <tabsContext.Provider value={{ selectedId, setSelectedId }}>
      <div className={twMerge('', className)}>
        {children}
      </div>
    </tabsContext.Provider>
  );
}

export function TabList({ children, className, ...props }: TabListProps) {
  return (
    <div
      role="tablist"
      className={twMerge(tabListVariants({ className }))}
      {...props}
    >
      {children}
    </div>
  );
}

export function TabTrigger({ value, children, className, ...props }: TabTriggerProps) {
  const { selectedId, setSelectedId } = useContext(tabsContext);
  const isSelected = selectedId === value;
  const id = useId();
  const controlsId = `${id}-content`;
  
  return (
    <button
      role="tab"
      type="button"
      id={id}
      aria-controls={controlsId}
      aria-selected={isSelected}
      data-state={isSelected ? 'active' : 'inactive'}
      className={twMerge(tabTriggerVariants({ className }))}
      onClick={() => setSelectedId(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabContent({ value, children, className, ...props }: TabContentProps) {
  const { selectedId } = useContext(tabsContext);
  const isSelected = selectedId === value;
  const id = useId();
  const labelledById = `${id}-trigger`;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      id={id}
      aria-labelledby={labelledById}
      className={twMerge('mt-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}