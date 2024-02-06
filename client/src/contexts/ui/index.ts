import { action, computed, makeObservable, observable } from 'mobx'
import { createContext, useContext } from 'react'

class UIStore {
  constructor() {
    makeObservable(this)
    this.init()
  }

  @observable scrollY = 1
  @observable prevScrollY = 1
  @observable clientWidth = 1

  @computed
  get scrollingDiff() {
    return Math.abs(this.scrollY - this.prevScrollY)
  }

  @computed
  get scrollingDown() {
    return this.scrollY > this.prevScrollY
  }

  @computed
  get scrollingUp() {
    return this.scrollY < this.prevScrollY
  }

  @action.bound
  onScroll(e: any) {
    this.prevScrollY = this.scrollY
    this.scrollY = window.scrollY
  }

  @action.bound
  onResize(e: any) {
    this.clientWidth = window.innerWidth
    // identical to useResizeObserver on App
  }

  @action.bound
  init() {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  }
}

const store = new UIStore()
export const UIStoreContext = createContext(store)
export const useUIStoreContext = () => useContext(UIStoreContext)
export default store
