import { action, makeObservable, observable } from 'mobx'
import { createContext, useContext } from 'react'

class UIStore {
  constructor() {
    makeObservable(this)
    this.init()
  }

  @observable scrollY = 1
  @observable prevScrollY = 1
  @observable clientWidth = 1

  @action.bound
  onScroll(e: any) {
    this.prevScrollY = this.scrollY
    this.scrollY = window.scrollY
  }

  @action.bound
  onResize(e: any) {
    this.clientWidth = window.innerWidth
  }

  @action.bound
  init() {
    document.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  }
}

const store = new UIStore()
export const UIStoreContext = createContext(store)
export const useUIStoreContext = () => useContext(UIStoreContext)
export default store
