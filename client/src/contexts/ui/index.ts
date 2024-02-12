import { action, computed, makeObservable, observable } from 'mobx'
import { createContext, useContext } from 'react'

class UIStore {
  constructor() {
    makeObservable(this)
    this.init()
  }

  // private isTrackingScrollDistance = false

  @observable scrollY = 1
  @observable prevScrollY = 1
  @observable clientWidth = 1
  // @observable scrollDistance = 0
  @observable hideHeader = false
  @observable isNavOpen = false

  @computed
  get scrollingDown() {
    return this.scrollY > this.prevScrollY
  }

  @computed
  get scrollingUp() {
    return this.scrollY < this.prevScrollY
  }

  @computed
  get shouldHideHeader() {
    if (this.isNavOpen) {
      return false
    } else if (this.scrollingDown && this.scrollY > 35) {
      return true
    } else {
      return false
    }
  }

  @action.bound
  setHideHeader(val: boolean) {
    this.hideHeader = val
  }

  @action.bound
  setIsNavOpen(val: boolean) {
    this.isNavOpen = val
  }

  // @action.bound
  // setScrollDistance(val: number) {
  //   this.scrollDistance = val
  // }

  // trackScrollDistance = () => {
  //   if (this.isTrackingScrollDistance === true) {
  //     return
  //   }

  //   this.isTrackingScrollDistance = true
  //   const start = this.scrollY

  //   setTimeout(() => {
  //     this.setScrollDistance(Math.abs(this.scrollY - start))
  //     this.isTrackingScrollDistance = false
  //   }, 300)
  // }

  @action.bound
  onScroll(e: any) {
    this.prevScrollY = this.scrollY
    this.scrollY = window.scrollY

    // this.trackScrollDistance()
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
