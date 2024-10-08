import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Wiki Prima SMP",
  description: "База знаний лучшего сервера!",
  themeConfig: {
    outline: {
      label: "На этой странице",
    },
    logo: '/64.pnggit init',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: 'Ссылки',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Карта мира', link: 'https://map.prisma-smp.ru' },
              { text: 'Discord', link: 'https://dsc.prisma-smp.ru' },
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Общее',
        collapsed: false,
        items: [
		{ text: 'Информация', link: '/info' },
          { text: 'Правила', link: '/rules' },
          { text: 'Команды', link: '/commands' },
        ]
      },
      {
        text: 'Игровые механики',
        collapsed: false,
        items: [

		  { text: 'Моды', link: '/mods' },
          { text: 'Кастомизация инструментов', link: '/tool-trims' },
          { text: 'Рецепты', link: '/recipes' },
          { text: 'Разнообразие гемплея', link: '/gameplay-variety' },
        ]
      },
    ]
  }
})
