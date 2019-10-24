declare global {
  interface Window {
    gs: {
      config(options: Options): void
      analytics: Analytics
    }
    ga(s1: string, s2: string, s3: string): void
  }
}

export interface ItemOptions {
  id: string
  attr?: string
  share?: string
  mark?: string,
  options?: SharingOptions
}

export interface SharingOptions {
  title?: string | any
  image?: string | any
  url?: string | any
}

export interface Options {
  defaultAttr: string
  click?: ItemOptions[]
  appear?: ItemOptions[]
  hover?: ItemOptions[]
  sharing?: SharingOptions
}

export interface SocialLinks {
  [index: string]: string
}

export interface Analytics {
  (mark: string): void
}

export interface GetMeta {
  (name: string): void
}

interface ActionProps {
  defaultAttr: string
}

export interface GetClickProps extends ActionProps {
  clickArray: ItemOptions[]
  sharingOptions: SharingOptions
}

export interface GetAppearProps extends ActionProps {
  appearArray: ItemOptions[]
}

export interface GetHoverProps extends ActionProps {
  hoverArray: ItemOptions[]
}
