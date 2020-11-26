import analytics from './analytics'
import sharing from './sharing'

// eslint-disable-next-line
import { GetClickProps } from '../typings'

const getClick = ({ defaultAttr, clickArray, sharingOptions }: GetClickProps) => {
  return () => {
    document.body.addEventListener('click', (e) => {
      let element = null
      const target = e.target as HTMLElement
      const itemOptions = clickArray.find(item => {
        const attr = item.attr || defaultAttr
        const id = item.id || item
        element = target && target.closest(`[${attr}]`)
        return element && element.getAttribute(attr) === id
      })

      if (typeof itemOptions === 'string') {
        return analytics(itemOptions)
      }

      if (itemOptions) {
        if (itemOptions.mark) {
          Array.isArray(itemOptions.mark) ? analytics(...itemOptions.mark) : analytics(itemOptions.mark)
        }
        itemOptions.share && sharing(itemOptions, element, sharingOptions)
      }
    })
  }
}

export default getClick
