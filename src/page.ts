import { NextPage as NextPageBase } from 'next'

import { LayoutType } from './layout'

export type NextPage<T = void> = NextPageBase<T> & {
  title?: string
  layout?: LayoutType
}
