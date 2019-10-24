import analytics from './analytics'

// eslint-disable-next-line
import { GetAppearProps } from '../typings'

const getAppear = ({ defaultAttr, appearArray }: GetAppearProps) => {
  return () => {
    const height = document.documentElement.clientHeight

    appearArray.forEach((item, index) => {
      const attr = item.attr || defaultAttr
      const id = item.id || item
      const mark = item.mark || item
      const element = document.querySelector(`[${attr}="${id}"]`) as HTMLElement

      if (element) {
        const top = height - element.getBoundingClientRect().top
        const bottom = element.getBoundingClientRect().top + element.offsetHeight

        if (top > 0 && bottom > 0) {
          appearArray.splice(index, 1)
          analytics(mark as string)
        }
      }
    })
  }
}

export default getAppear
