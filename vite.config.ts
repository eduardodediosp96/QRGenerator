import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
