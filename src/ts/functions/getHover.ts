import analytics from './analytics'

// eslint-disable-next-line
import { GetHoverProps } from '../typings'

const getHover = ({ defaultAttr, hoverArray }: GetHoverProps) => {
  return () => {
    const height = document.documentElement.clientHeight

    hoverArray.forEach((item, index) => {
      const attr = item.attr || defaultAttr
      const id = item.id || item
      const mark = item.mark || item
      const element = document.querySelector(`[${attr}="${id}"]`) as HTMLElement

      if (element) {
        const top = height - element.getBoundingClientRect().top
        const bottom = element.getBoundingClientRect().top + element.offsetHeight

        if (top > 0 && bottom > 0) {
          hoverArray.splice(index, 1)
          element.addEventListener('mouseenter', () => {
            analytics(mark as string)
          })
        }
      }
    })
  }
}

export default getHover
