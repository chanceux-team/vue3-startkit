import { URL, fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const {
    VITE_APP_API_HOST,
  } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      vue(),
      vueJsx(),
      Components({
        directoryAsNamespace: true,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 8000,
      proxy: {
        '/api': {
          target: VITE_APP_API_HOST,
          changeOrigin: true,
        },
      },
    },
  };
});
