import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabList, TabTrigger, TabContent } from './Tabs';

describe('Tabs Component', () => {
  it('renders correctly with default props', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();
  });

  it('switches tabs when clicked', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Tab 2'));

    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    render(
      <Tabs defaultValue="tab1" variant="pills">
        <TabList variant="pills">
          <TabTrigger value="tab1" variant="pills">Tab 1</TabTrigger>
          <TabTrigger value="tab2" variant="pills">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    const tabList = screen.getByRole('tablist');
    expect(tabList).toHaveClass('bg-transparent');
    
    const activeTab = screen.getByRole('tab', { selected: true });
    expect(activeTab).toHaveClass('data-[state=active]:bg-primary-100');
  });

  it('maintains proper ARIA attributes for accessibility', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabList>
          <TabTrigger value="tab1">Tab 1</TabTrigger>
          <TabTrigger value="tab2">Tab 2</TabTrigger>
        </TabList>
        <TabContent value="tab1">Content 1</TabContent>
        <TabContent value="tab2">Content 2</TabContent>
      </Tabs>
    );

    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false');
    
    const tabPanel = screen.getByRole('tabpanel');
    expect(tabPanel).toBeInTheDocument();
    expect(tabPanel).toHaveTextContent('Content 1');
  });
});
