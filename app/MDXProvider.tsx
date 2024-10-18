import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '../mdx-components'; // Your custom components setup

const CustomMDXProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const components = useMDXComponents(); // Get custom components

  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default CustomMDXProvider;
