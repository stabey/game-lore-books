import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import BookShelf from './BookShelf.vue'
import BookHome from './BookHome.vue'
import { rememberChapter } from './progress'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('BookShelf', BookShelf)
    app.component('BookHome', BookHome)
    if (typeof window !== 'undefined') {
      const prev = router.onAfterRouteChange
      router.onAfterRouteChange = (to) => {
        prev?.(to)
        rememberChapter(to)
      }
      window.addEventListener('load', () => rememberChapter(location.pathname))
    }
  }
} satisfies Theme
