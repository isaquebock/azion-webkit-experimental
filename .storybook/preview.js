/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import { setup } from '@storybook/vue3-vite';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primevue/themes';
import Lara from '@primevue/themes/lara'

// Import CSS in correct order - PrimeVue first, then custom styles
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../src/assets/icons/azionicons.scss";
import '../src/assets/styles/avatar.css';
import '../src/assets/styles/hsform.css';
import '../src/assets/styles/text.css';
import '../src/assets/styles/main.css';
import 'azion-theme'

import { withThemeByClassName } from '@storybook/addon-themes';

const MyPreset = definePreset(Lara, {
  primitive: {
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#F3652B',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407'
    }
  },
  components: {
    inputtext: {
      root: {
        background: '{surface.800}',
        hoverBackground: '{surface.800}',
        filledBackground: '{surface.800}',
        filledHoverBackground: '{surface.800}'
      }
    },
    dropdown: {
      root: {
        background: '{surface.800}',
        hoverBackground: '{surface.800}'
      }
    }
  },
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}'
    }
  }
});

setup((app) => {
  app.use(PrimeVue, {
    unstyled: false,
    theme: {
      preset: MyPreset
    }
  });
});

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Blocks',
        [
          'Hero',
          'Sections',
          'Banner',
          'Pages',
          'List'
        ],
        'Components Group',
        'Components',
        'Layout',
        'Elements'
      ],
    },
  },
  backgrounds: {
    options: {
      'azion-dark': {
        name: 'azion-dark',
        value: '#171717',
      },
      'azion-light': {
        name: 'azion-light',
        value: '#ffffff',
      }
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i
    }
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: "strict",
    },
  },
}

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'azion azion-light',
      dark: 'azion azion-dark',
    },
    defaultTheme: 'light',
  })
];
