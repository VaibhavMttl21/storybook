import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Accordions display a list of high-level options that can expand/collapse to reveal more information.

## Usage Guidelines

- Use accordions to organize related information into collapsible sections
- Keep headers clear and concise
- Ensure content within each section is related
- Consider the amount of content in each section
- Use when space is limited and information needs to be progressive disclosed

## Accessibility

- Uses proper ARIA attributes
- Supports keyboard navigation
- Clear focus indicators
- Proper labelling of expandable sections

## Interactions
- Click on an accordion header to expand/collapse its content
- Only one section can be open at a time
`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion defaultValue="item-1" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger aria-controls="item-1">Is it accessible?</AccordionTrigger>
        <AccordionContent id="item-1">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger aria-controls="item-2">Is it styled?</AccordionTrigger>
        <AccordionContent id="item-2">
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger aria-controls="item-3">Is it animated?</AccordionTrigger>
        <AccordionContent id="item-3">
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Separated: Story = {
  render: () => (
    <Accordion defaultValue="item-1" variant="separated" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger variant="separated" aria-controls="item-1">Is it accessible?</AccordionTrigger>
        <AccordionContent variant="separated" id="item-1">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger variant="separated" aria-controls="item-2">Is it styled?</AccordionTrigger>
        <AccordionContent variant="separated" id="item-2">
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger variant="separated" aria-controls="item-3">Is it animated?</AccordionTrigger>
        <AccordionContent variant="separated" id="item-3">
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};