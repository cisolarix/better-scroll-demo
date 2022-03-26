import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'
import './index.sass'

BScroll.use(Slide)

new BScroll('.slide-wrapper', {
  scrollX: true,
  scrollY: false,
  slide: {
    threshold: 100
  },
  momentum: false,
  bounce: false,
  stopPropagation: true
})
