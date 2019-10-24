// eslint-disable-next-line
import { GetMeta } from '../typings'

const getMeta: GetMeta = (name) => {
  const meta = document.querySelector(`meta[property="og:${name}"]`)
  return meta && meta.getAttribute('content')
}

export default getMeta
