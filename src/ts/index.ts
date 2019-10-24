import 'core-js/fn/array/find.js'
import './functions/polyfills.js'
import getClick from './functions/getClick'
import getAppear from './functions/getAppear'
import getHover from './functions/getHover'
import analytics from './functions/analytics'

// eslint-disable-next-line
import { Options } from './typings'

if (process.env.NODE_ENV !== 'production') {
  require('../index.html')
}

window.gs = {
  config (options: Options) {
    const { defaultAttr = 'data-id', click = [], appear = [], hover = [], sharing = {} } = options

    const clickFunc = getClick({ defaultAttr, clickArray: click, sharingOptions: sharing })
    const appearFunc = getAppear({ defaultAttr, appearArray: appear })
    const hoverFunc = getHover({ defaultAttr, hoverArray: hover })

    window.addEventListener('DOMContentLoaded', () => {
      clickFunc()
      appearFunc()
      hoverFunc()

      let timer: number
      window.addEventListener('scroll', () => {
        clearTimeout(timer)
        timer = window.setTimeout(appearFunc, 100)
        timer = window.setTimeout(hoverFunc, 100)
      })
    })
  },
  analytics
}
