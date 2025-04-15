import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbItem } from './Breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Breadcrumbs indicate the current page's location within a navigational hierarchy and help users navigate back to previous levels.

## Usage Guidelines

- Use breadcrumbs for hierarchical navigation with multiple levels
- Ensure breadcrumbs represent the actual site structure
- Place breadcrumbs at the top of the page, typically below the primary navigation
- Use clear, concise labels for each breadcrumb level

## Do's
- Do place breadcrumbs consistently across the site
- Do use short, descriptive labels for each level
- Do highlight the current page differently from the clickable links
- Do maintain a logical hierarchy that matches the site structure
- Do consider using icons (like home) for the root level

## Don'ts
- Don't use breadcrumbs for flat websites with no hierarchy
- Don't use breadcrumbs as primary navigation
- Don't create artificially deep hierarchies just to use breadcrumbs
- Don't include too many levels that might wrap to multiple lines on small screens
- Don't use full URLs or overly technical identifiers as breadcrumb labels

## Accessibility

- Uses semantic HTML (nav and ol elements)
- Includes proper ARIA attributes
- Current page is clearly indicated
- Separators are decorative and not announced by screen readers
`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Smartphones</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs separator=">">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Smartphones</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const Emphasized: Story = {
  render: () => (
    <Breadcrumbs variant="emphasized">
      <BreadcrumbItem variant="emphasized" href="/">Home</BreadcrumbItem>
      <BreadcrumbItem variant="emphasized" href="/products">Products</BreadcrumbItem>
      <BreadcrumbItem variant="emphasized" href="/products/electronics">Electronics</BreadcrumbItem>
      <BreadcrumbItem variant="emphasized" isCurrent>Smartphones</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mr-1"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
      <BreadcrumbItem href="/dashboard/analytics">Analytics</BreadcrumbItem>
      <BreadcrumbItem isCurrent>Reports</BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const ThemeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="bg-surface-background p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Light Theme</h3>
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Smartphones</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      
      <div className="dark bg-surface-background p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-surface-foreground">Dark Theme</h3>
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem href="/products/electronics">Electronics</BreadcrumbItem>
          <BreadcrumbItem isCurrent>Smartphones</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </div>
  ),
};
