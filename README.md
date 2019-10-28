## Конфигурация

```js
gs.config({
  attr: 'data-id', // Общий аттрибут. Значение по умолчанию 'data-id'
  
  // Клик на элемент
  click: [
    // с data-id="vk" и шеринг vk
    {
      id: 'vk',
      share: 'vk'
    },

    // с data-some="fb" и шеринг fb
    {
      attr: 'data-some', // Собственный аттрибут
      id: 'fb',
      share: 'fb'
    },

    // с data-id="tw" и шеринг tw с собственными параметрами
    {
      id: 'tw',
      share: 'tw',
      options: {
        title: 'own options title',
        image: 'own options image',
        url: 'own options url'
      }
    },

    // с data-id="start" и вызов window.ga('send', 'event', 'click_start')
    {
      id: 'start',
      mark: 'click_start'
    },

    // с data-id="start_button" и вызов window.ga('send', 'event', 'start_button')
    'start_button',

    // с data-id="ok", шеринг ok и вызов window.ga('send', 'event', 'share_ok')
    {
      id: 'ok',
      share: 'ok',
      mark: 'share_ok'
    }
  ],

  // Появление на экране элемента
  appear: [
    // с data-id="header" и вызов window.ga('send', 'event', 'show_header')
    {
      id: 'header',
      mark: 'show_header'
    },

    // с data-some="section-1" и вызов window.ga('send', 'event', 'show_section_1')
    {
      attr: 'data-some',
      id: 'section-1',
      mark: 'show_section_1'
    },

    // с data-id="show_section_2" и вызов window.ga('send', 'event', 'show_section_2')
    'show_section_2'
  ],

  // Наведение на элемент
  hover: [
    // Конфигурация аналогична appear
  ],

  // Общие параметры для шеринга
  sharing: {
    title: 'common options title',
    image: ' common options image',
    url: 'common options url'
  }
})
```

## Кастомный вызов ga

```js
gs.analytics('start', 'Остальные параметры в любом количестве')
```

## Приоритет параметров для шеринга

Собственные параметры -> Параметры из data-аттрибутов родителя -> Общие параметры -> Параметры из мета-тегов

## Доступные соцсети

* vk - VK
* fb - Facebook
* tw - Twitter
* ok - Odnoklassniki
* tb - Tumblr
* tg - Telegram
* wa - WhatsApp
