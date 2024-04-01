import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Revue de code par Alexandre St-Amant', link: '/Alexandre-St-Amant' },
      { text: 'Revue de code par William Villeneuve', link: '/William-Villeneuve' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Revue de code par Alexandre St-Amant', link: '/Alexandre-St-Amant' },
          { text: 'Revue de code par William Villeneuve', link: '/William-Villeneuve' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
