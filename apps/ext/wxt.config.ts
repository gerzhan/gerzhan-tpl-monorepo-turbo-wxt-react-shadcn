import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  // NOTEL @see https://wxt.dev/guide/essentials/project-structure.html#adding-a-src-directory
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
});
