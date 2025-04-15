import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tags are used to label, categorize, or organize items using keywords that describe them.
They help users quickly identify and navigate through content.

## Usage Guidelines

- Use tags to categorize content or show status
- Keep tag text concise and clear
- Use appropriate colors to convey meaning
- Ensure sufficient color contrast for accessibility
- Consider using icons with tags when appropriate

## Accessibility

- Tags use semantic HTML elements
- Color combinations meet WCAG 2.1 contrast requirements
- Focus states are clearly visible
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'The visual style variant of the tag',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag',
    },
    children: {
      control: 'text',
      description: 'The content to be displayed within the tag',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
    variant: 'default',
    size: 'md',
  },
};

export const Variants: Story = {
  args: {
    children: 'Default Tag',
  },
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Tag variant="default">Default</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    children: 'Sample Tag',
  },
  render: () => (
    <div className="flex gap-2 items-center">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};