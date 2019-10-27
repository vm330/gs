// eslint-disable-next-line
import { Analytics } from '../typings'

const analytics: Analytics = (mark, ...rest) => {
  window.ga('send', 'event', mark, ...rest)
  console.log('ga -->', mark, ...rest)
}

export default analytics
