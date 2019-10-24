// eslint-disable-next-line
import { Analytics } from '../typings'

const analytics: Analytics = (mark) => {
  window.ga('send', 'event', mark)
  console.log('ga -->', mark)
}

export default analytics
