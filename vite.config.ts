import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ManifestV3Export, crx } from '@crxjs/vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import manifestJson from './public/manifest.json';

const manifest = manifestJson as ManifestV3Export;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), svgr(), crx({ manifest })],
  resolve: {
    alias: {
      '@commonComponents': '/src/common/components',
      '@components': '/src/components',
      '@constants': '/src/common/Constants',
      '@icons': '/src/common/Icons/index.tsx',
      '@images': '/src/common/Images',
      '@services': '/src/services',
      '@styles': '/src/common/Styles',
      '@theme': '/src/common/Theme',
      '@utils': '/src/common/Utils',
    },
  },
});
