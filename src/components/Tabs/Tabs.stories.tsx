import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, TabTrigger, TabContent } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Tabs organize content into multiple sections and allow users to navigate between them.

## Usage Guidelines

- Use tabs to organize related content into different views
- Keep tab labels short and descriptive
- Ensure tab content is related but distinct
- Consider using icons alongside labels for better recognition
- Limit the number of tabs to maintain usability

## Accessibility

- Uses proper ARIA roles (tablist, tab, tabpanel)
- Supports keyboard navigation
- Clear focus indicators
- Proper labelling and relationships between tabs and panels

## Interactions
- Click on a tab to display its associated content
- Only one tab can be active at a time
`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabList>
        <TabTrigger value="account">Account</TabTrigger>
        <TabTrigger value="password">Password</TabTrigger>
        <TabTrigger value="settings">Settings</TabTrigger>
      </TabList>
      <TabContent value="account">
        <div className="p-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-surface-foreground/70">
            Configure your account preferences here.
          </p>
        </div>
      </TabContent>
      <TabContent value="password">
        <div className="p-4">
          <h3 className="text-lg font-medium">Password Settings</h3>
          <p className="text-surface-foreground/70">
            Update your password and security settings.
          </p>
        </div>
      </TabContent>
      <TabContent value="settings">
        <div className="p-4">
          <h3 className="text-lg font-medium">General Settings</h3>
          <p className="text-surface-foreground/70">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabContent>
    </Tabs>
  ),
};

export const Pills: Story = {
  render: () => (
    <Tabs defaultValue="account" variant="pills" className="w-[400px]">
      <TabList variant="pills">
        <TabTrigger value="account" variant="pills">Account</TabTrigger>
        <TabTrigger value="password" variant="pills">Password</TabTrigger>
        <TabTrigger value="settings" variant="pills">Settings</TabTrigger>
      </TabList>
      <TabContent value="account">
        <div className="p-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-surface-foreground/70">
            Configure your account preferences here.
          </p>
        </div>
      </TabContent>
      <TabContent value="password">
        <div className="p-4">
          <h3 className="text-lg font-medium">Password Settings</h3>
          <p className="text-surface-foreground/70">
            Update your password and security settings.
          </p>
        </div>
      </TabContent>
      <TabContent value="settings">
        <div className="p-4">
          <h3 className="text-lg font-medium">General Settings</h3>
          <p className="text-surface-foreground/70">
            Manage your application settings and preferences.
          </p>
        </div>
      </TabContent>
    </Tabs>
  ),
};