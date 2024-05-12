import type { StorybookConfig } from '@storybook/vue3-vite'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config, options) {
    config.base = '/'
    config.assetsInclude = ['/sb-preview/runtime.js']
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': fileURLToPath(new URL('../', import.meta.url))
      }
    } else {
      config.resolve = {
        alias: {
          '@': fileURLToPath(new URL('../', import.meta.url))
        }
      }
    }

    if (config.plugins) {
      config.plugins.push(
        Components({
          dts: true,
          dirs: ['../src/components/common', '../src/components/ui']
        }),
        AutoImport({
          imports: ['vue']
        })
      )
    } else {
      config.plugins = [
        Components({
          dts: true,
          dirs: ['../src/components/common', '../src/components/ui']
        }),
        AutoImport({
          imports: ['vue']
        })
      ]
    }
    return config
  }
}
export default config
