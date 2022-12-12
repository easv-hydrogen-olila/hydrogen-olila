import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import netlifyPlugin from '@netlify/hydrogen-platform/plugin'

export default defineConfig({
  plugins: [hydrogen(), netlifyPlugin(),     {
    name: 'remove-swiper',
    transform(code, id, options = {}) {
      if (options.ssr)
        return code.replace(/import .swiper\/(s?css|less).*$/gm, '')
    },
  },],
  
});
