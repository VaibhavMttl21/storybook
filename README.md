# UI Component Library

A modern, accessible UI component library built with React, TypeScript, and Tailwind CSS.

## 📋 Overview

This project provides a collection of reusable UI components designed with accessibility and customization in mind. Each component is built following best practices and includes comprehensive documentation and testing.

## ✨ Features

- **Accessible Components**: All components follow WAI-ARIA guidelines
- **Themeable**: Light and dark mode support with customizable color schemes
- **Responsive**: Mobile-friendly components that work across device sizes
- **Type-Safe**: Built with TypeScript for better developer experience
- **Documented**: Comprehensive Storybook documentation with usage examples

## 🧩 Components

The library includes the following components:

- **Accordion**: Collapsible content panels for organizing information
- **Breadcrumbs**: Navigation aid showing the user's location in a website hierarchy
- **Tabs**: Interface for switching between different views within the same context
- **Tag**: Labels for categorizing and highlighting items

## 🛠️ Tech Stack

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Class Variance Authority (CVA)](https://cva.style/docs) - Component variant management
- [Storybook](https://storybook.js.org/) - Component documentation and testing
- [Vitest](https://vitest.dev/) - Testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd frontend

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Launch Storybook
npm run storybook

# Run tests
npm run test
```

### Building

```bash
# Build for production
npm run build

# Build Storybook
npm run build-storybook
```

## 📁 Project Structure

```
src/
├── components/         # UI Components
│   ├── Accordion/      # Accordion component and stories
│   ├── Breadcrumbs/    # Breadcrumbs component and stories
│   ├── Tabs/           # Tabs component and stories
│   └── Tag/            # Tag component and stories
├── styles/             # Global styles and theme configuration
│   └── theme.css       # Tailwind configuration and CSS variables
└── ...                 # Other application files
```

## 🧪 Testing

Components are tested using Vitest and React Testing Library. Tests ensure that components render correctly, handle user interactions, and maintain accessibility standards.

To run tests:

```bash
npm run test
```

## 📚 Storybook

Storybook provides interactive documentation for all components. Each component has multiple examples showing different variants and use cases.

To run Storybook:

```bash
npm run storybook
```

## 🎨 Theming

The project uses CSS variables for theming, with support for both light and dark modes. Theme colors are defined in `src/styles/theme.css` and can be customized.

## 📝 Component Documentation

Each component includes:

- Usage guidelines
- Accessibility considerations
- Do's and don'ts
- Interactive examples
- Variant demonstrations

## 🔄 Workflow Integration

Components can be imported and used in any React application:

```jsx
import { Tabs, TabList, TabTrigger, TabContent } from './components/Tabs/Tabs';

function MyComponent() {
  return (
    <Tabs defaultValue="tab1">
      <TabList>
        <TabTrigger value="tab1">First Tab</TabTrigger>
        <TabTrigger value="tab2">Second Tab</TabTrigger>
      </TabList>
      <TabContent value="tab1">First tab content</TabContent>
      <TabContent value="tab2">Second tab content</TabContent>
    </Tabs>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
