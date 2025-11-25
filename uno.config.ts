import { defineConfig, presetAttributify, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],

  // Add any custom rules or shortcuts you need
  shortcuts: {
    // Common utility shortcuts
    'flex-center': 'flex items-center justify-center',
    'flex-col-center': 'flex flex-col items-center justify-center',
    'absolute-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  },

  // Custom theme (optional)
  theme: {
    colors: {
      // You can add custom colors here if needed
    },
  },

  // Safelist classes that should always be included
  safelist: [
    // Add any classes that UnoCSS might not detect
  ],

  // Content detection
  content: {
    filesystem: [
      'src/**/*.{vue,js,ts,jsx,tsx}',
      'index.html',
    ],
  },
})
