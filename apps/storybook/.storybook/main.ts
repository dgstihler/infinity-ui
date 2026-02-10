import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import tailwindcss from '@tailwindcss/vite';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {
      builder: {
        viteConfigPath: join(dirname(fileURLToPath(import.meta.url)), '../vite.config.mts'),
      },
    },
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
