import { makeObservable, computed, observable, action } from 'mobx'
import { createContext, useContext } from 'react'
import db from '../../../data/db.json'
import { DURATION_JANK_DELAY, DURATION_SLIDE, SLIDE_INTERVAL } from '../constants'
import { ImageProps } from '../components/Image/Index'

export interface Project {
  id: number
  client: string
  clientId: string
  year: number
  url: string
  role: string
  projectName: string
  projectDescription: string
  fragment: string
  skills: string
  software: string
  longDesc: string
  image: ImageProps
}

class SliderStore {
  private intervalId?: number

  constructor() {
    makeObservable(this)
    this.init()
  }

  @observable index = 0
  // @observable viewingIndex = 0
  // @observable isAnimatingLeft = false
  // @observable isAnimatingRight = false
  @observable isCaptionHiding = false
  @observable isCaptionHidden = false
  @observable isCaptionShowing = false
  @observable isPlaying = false
  @observable data: Project[] = []

  @computed
  get numOfSlides(): number {
    return this.data?.length ?? 0
  }

  @computed
  get isAtEnd(): boolean {
    return this.index === this.numOfSlides - 1
  }

  @computed
  get isAtStart(): boolean {
    return this.index === 0
  }

  @computed
  get nextIndex(): number {
    return this.isAtEnd ? 0 : this.index + 1
  }

  @computed
  get prevIndex(): number {
    return this.isAtStart ? this.numOfSlides - 1 : this.index - 1
  }

  @action.bound
  setIndex(val: number) {
    this.index = val
  }

  // @action.bound
  // setViewingIndex(val: number) {
  //   this.viewingIndex = val
  // }

  @action.bound
  goToPrevious() {
    // if (!!this.isAnimatingLeft) {
    //   return
    // }

    this.setIndex(this.prevIndex)
    // this.setIsAnimatingLeft(true)

    // setTimeout(() => {
    //   this.setViewingIndex(this.prevIndex)
    //   setTimeout(this.setIsAnimatingLeft, DURATION_JANK_DELAY, false) // setTimeout fixes jank in Edge
    // }, DURATION_SLIDE)
  }

  @action.bound
  goToNext() {
    // if (!!this.isAnimatingRight) {
    //   return
    // }

    // this.setIndex(this.nextIndex)
    // this.setIsAnimatingRight(true)

    this.setIndex(this.nextIndex)
    // this.setViewingIndex(this.nextIndex)

    // setTimeout(() => {
    //   setTimeout(this.setIsAnimatingRight, DURATION_JANK_DELAY, false) // setTimeout fixes jank in Edge
    // }, DURATION_SLIDE)
  }

  @action.bound
  goTo(val: number) {
    this.index = val
    // this.viewingIndex = val
  }

  // @action.bound
  // setIsAnimatingRight(val: boolean) {
  //   this.isAnimatingRight = val
  // }

  // @action.bound
  // setIsAnimatingLeft(val: boolean) {
  //   this.isAnimatingLeft = val
  // }

  @action.bound
  setIsCaptionHiding(val: boolean) {
    this.isCaptionHiding = val
  }

  @action.bound
  setIsCaptionHidden(val: boolean) {
    this.isCaptionHidden = val
  }

  @action.bound
  setIsCaptionShowing(val: boolean) {
    this.isCaptionShowing = val
  }

  @action.bound
  setIsPlaying(val: boolean) {
    this.isPlaying = val
  }

  pause = () => {
    window.clearInterval(this.intervalId)
    this.setIsPlaying(false)
  }

  play = () => {
    this.intervalId = window.setInterval(this.goToNext, SLIDE_INTERVAL)
    this.setIsPlaying(true)
  }

  @action.bound
  init() {
    this.data = db
    this.play()
  }
}

export default SliderStore
type SliderStoreType = InstanceType<typeof SliderStore>
export const SliderStoreContext = createContext<SliderStoreType>({} as SliderStoreType)
export const useSliderStoreContext = () => useContext(SliderStoreContext)
