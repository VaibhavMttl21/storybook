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

## Do's
- Do use tabs when content can be divided into distinct categories
- Do keep tab labels concise (1-2 words if possible)
- Do maintain a logical order of tabs based on user workflow
- Do indicate the active tab clearly
- Do ensure tab content loads quickly to avoid user frustration

## Don'ts
- Don't use tabs for sequential processes (use stepper instead)
- Don't use more than 7 tabs in a single tab group
- Don't hide critical information behind tabs
- Don't use tabs for unrelated content
- Don't nest tab groups inside other tab groups

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

export const ThemeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="bg-surface-background p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Light Theme</h3>
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
      </div>
      
      <div className="dark bg-surface-background p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-surface-foreground">Dark Theme</h3>
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
      </div>
    </div>
  ),
};