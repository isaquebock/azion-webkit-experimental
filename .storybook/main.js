// /** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    "@whitespace/storybook-addon-html"
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    // Force CSS injection for PrimeVue 4 themes
    config.css = config.css || {};
    config.css.postcss = config.css.postcss || {};
    config.css.postcss.plugins = config.css.postcss.plugins || [];
    
    // Ensure CSS is processed synchronously
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.include = config.optimizeDeps.include || [];
    config.optimizeDeps.include.push('primevue/config', '@primevue/themes/lara');
    
    return config;
  },
}
export default config
