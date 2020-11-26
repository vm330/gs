// eslint-disable-next-line
import { Analytics } from '../typings'

const analytics: Analytics = (...args) => {
  window.ga('send', 'event', ...args)
  console.log('ga -->', ...args)
}

export default analytics
