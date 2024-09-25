# Brand Messenger Custom Components Example

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lithiumtech/brandmessenger-custom-components/blob/main/LICENSE)

## Overview
This is an example project that demonstrates how to build custom components for the Brand Messenger platform using Vite, Shadcn, React, Tailwind CSS, and TypeScript. The UI was bootstrapped with https://v0.dev/.

`window.KHOROS_CONFIG.customComponents` is designed to be usable by any frontend framework, or vanilla Javascript, so the frameworks used in this project are just examples.

## Important Files:
1. [src/main-in-parent.js](src/main-in-parent.js) - Example file with the code that goes into the top level page, instructing Brand Messenger to use this custom component.
2. [src/main.tsx](src/main.tsx) - The entry point to the bundle file that gets inserted into the widget iframe, defined by [src/main-in-parent.js](src/main-in-parent.js). 

The rest of the files in this repository are related to the specific implementation of this example UI and can be disregarded.

## Getting Started

1. 
    ```bash
    git clone https://github.com/lithiumtech/brandmessenger-custom-components.git
    ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies.

    ```bash
    npm install
    ```

3. **Run the Development Server**: Launch the development server to start building your application.

    ```bash
    npm run dev
    ```

4. **Build for Production**: When you're ready to deploy your application, create a production build.

    ```bash
    npm run build
    ```

## Frameworks Used

- **Vite**: Lightning-fast development server and build tool for modern web development.
- **Shadcn**: A component library intended to be copy-pasted rather than installed as a dependency, offering flexibility.
- **React**: A popular JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework that provides a set of pre-designed styles for rapid UI development.
- **TypeScript**: A superset of JavaScript that adds static types, enhancing code quality and developer productivity.



## Included Libraries

- **@radix-ui/react-slot**: Component primitives for building unstyled, fully accessible UIs.
- **class-variance-authority**: A utility for managing conditional CSS class variations.
- **clsx**: A tiny utility for constructing className strings conditionally.
- **lucide-react**: A library of simply designed, easily recognizable SVG icons for React.
- **react**: The JavaScript library for building user interfaces.
- **react-dom**: Entry point for React applications to interact with the DOM.
- **tailwind-merge**: Utility functions for merging Tailwind CSS classes.
- **tailwindcss-animate**: A plugin for animating Tailwind CSS classes.

## Development Tools

- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript.
- **@typescript-eslint/parser**: TypeScript parser for ESLint.
- **@vitejs/plugin-react**: Vite plugin for React.
- **autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: A pluggable linting utility for JavaScript and JSX.
- **eslint-plugin-react-hooks**: ESLint plugin for React hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for React Refresh.
- **postcss**: A tool for transforming styles with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.
- **typescript**: A superset of JavaScript that adds static types.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
