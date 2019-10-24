import getMeta from './getMeta'

// eslint-disable-next-line
import { ItemOptions, SharingOptions, SocialLinks } from '../typings'

const sharing = ({ share, options }: ItemOptions, element: HTMLElement | null, commonOptions: SharingOptions) => {
  const parent = element && element.parentElement as HTMLElement

  const title = encodeURIComponent(
    (options && options.title) ||
    (parent && parent.getAttribute('data-title')) ||
    (commonOptions && commonOptions.title) ||
    getMeta('title')
  )

  const image = encodeURIComponent(
    (options && options.image) ||
    (parent && parent.getAttribute('data-image')) ||
    (commonOptions && commonOptions.image) ||
    getMeta('image')
  )

  const url = encodeURIComponent(
    (options && options.url) ||
    (parent && parent.getAttribute('data-url')) ||
    (commonOptions && commonOptions.url) ||
    getMeta('url')
  )

  const socialLinks: SocialLinks = {
    vk: `https://vk.com/share.php?url=${url}&title=${title}&image=${image}`,
    fb: `https://www.facebook.com/share.php?u=${url}`,
    tw: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    ok: `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=${url}`,
    tb: `https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=${url}&title=${title}`,
    tg: `tg://msg?text=${url}`,
    wa: `whatsapp://send?text=${url}`
    // tg: `https://telegram.me/share/url?url=${url}&text=${title}`
    // wa: `https://wa.me/?text=${url}`
  }

  window.open(socialLinks[share as string], 'Поделиться', 'width=500,height=500,resizable=yes,scrollbars=yes,status=yes')

  console.log('sharing -->', share)
}

export default sharing
