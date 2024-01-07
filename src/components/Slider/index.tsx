import React, { useEffect, useState, useCallback, useRef } from 'react'
import db from '../../data/db.json'
import Caption from './components/Caption'
import MenuItem from './components/MenuItem'
import SlideImage, { ImageProps } from './components/Image/Index'

import { DURATION_SLIDE, DURATION_CAPTION, DURATION_TIMEOUT, TIMER } from './constants'

import './index.scss'

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

const data: Project[] = db

function Slider() {
  const intervalRef = useRef<number | undefined>()

  const [index, setIndex] = useState(0)
  const [viewingIndex, setViewingIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimatingRight, setIsAnimatingRight] = useState(false)
  const [isAnimatingLeft, setIsAnimatingLeft] = useState(false)
  const [isCaptionHiding, setIsCaptionHiding] = useState(false)
  const [isCaptionHidden, setIsCaptionHidden] = useState(false)
  const [isCaptionShowing, setIsCaptionShowing] = useState(false)

  const onMouseOver = (): void => {
    setIsHovered(true)
    pause()
  }

  const onMouseLeave = (): void => {
    setIsHovered(false)
  }

  const hideCaptions = (): void => {
    setIsCaptionHiding(true)
    setTimeout(() => {
      setIsCaptionHidden(true)
      setIsCaptionHiding(false)
    }, DURATION_CAPTION)
  }

  const showCaptions = (): void => {
    setIsCaptionShowing(true)
    setIsCaptionHidden(false)
    setTimeout(() => {
      setIsCaptionShowing(false)
    }, DURATION_CAPTION)
  }

  const goto = (idx: number): void => {
    setIndex(idx)
    setViewingIndex(idx)
  }

  const pause = (): void => {
    clearInterval(intervalRef.current)
    setIsPlaying(false)
  }

  const previous = (): void => {
    if (isAnimatingLeft === true) {
      return
    }

    const idx: number = index === 0 ? data.length - 1 : index - 1

    setPrevIndex(idx)
    setIndex(idx)

    setIsAnimatingLeft(true)
    setTimeout(() => {
      setViewingIndex(idx)
      setTimeout(setIsAnimatingLeft, DURATION_TIMEOUT, false) // setTimeout fixes jank in Edge
    }, DURATION_SLIDE)
  }

  const next = useCallback((): void => {
    if (isAnimatingRight === true) {
      return
    }
    const idx = index === data.length - 1 ? 0 : index + 1

    setNextIndex(idx)
    setIndex(idx)

    setIsAnimatingRight(true)
    setTimeout(() => {
      setViewingIndex(idx)
      setTimeout(setIsAnimatingRight, DURATION_TIMEOUT, false) // setTimeout fixes jank in Edge
    }, DURATION_SLIDE)
  }, [index, isAnimatingRight])

  const play = useCallback(() => {
    setIsPlaying(true)
    intervalRef.current = window.setTimeout(next, TIMER)
  }, [next])

  useEffect(() => {
    if (isHovered === false) {
      play()
    }
    return () => pause()
  }, [play, isHovered])

  const menuItems = data.map(
    (t: Project, idx): JSX.Element => (
      <MenuItem
        key={`mi-${t.id}`}
        isActive={index === idx}
        onMenuClick={() => goto(idx)}
        image={data[idx].image}
        client={data[idx].client}
      />
    )
  )

  const currentSlide = data[viewingIndex]
  const slideImagePrev: ImageProps = data[prevIndex]?.image
  const slideImageCurrent: ImageProps = currentSlide?.image
  const slideImageNext: ImageProps = data[nextIndex]?.image

  return (
    <div id="slider1" className="slider">
      <div
        className={isCaptionHidden ? 'slider__container slider__container--captions-hidden' : 'slider__container'}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        <div className="slider__viewport">
          <div
            className={
              isAnimatingRight
                ? 'viewport__slides viewport__slides--is-animating-right'
                : isAnimatingLeft
                ? 'viewport__slides viewport__slides--is-animating-left'
                : 'viewport__slides'
            }
          >
            <SlideImage {...slideImagePrev} />
            <SlideImage {...slideImageCurrent} />
            <SlideImage {...slideImageNext} />
          </div>
        </div>

        <nav>
          <button type="button" className="nav__btn btn-prev" onClick={previous}>
            Previous
          </button>
          <button type="button" className="nav__btn btn-next" onClick={next}>
            Next
          </button>
        </nav>

        <div className="slider__controls">
          <div className="controls__slider-menu">
            {menuItems}
            <div className="slider-menu__play-state">{isPlaying === true ? 'Playing' : 'Paused'}</div>
          </div>

          {isCaptionHidden === false ? (
            <button type="button" className="btn btn-toggle-captions" onClick={hideCaptions}>
              Hide Captions
            </button>
          ) : (
            <button type="button" className="btn btn-toggle-captions" onClick={showCaptions}>
              Show Captions
            </button>
          )}
        </div>
      </div>

      <div
        className={
          isCaptionHiding
            ? 'slider__caption-display slider__caption-display--is-hiding'
            : isCaptionHidden
            ? 'slider__caption-display slider__caption-display--is-hidden'
            : isCaptionShowing
            ? 'slider__caption-display slider__caption-display--is-showing'
            : 'slider__caption-display'
        }
      >
        <Caption isUpdating={isAnimatingRight || isAnimatingLeft} slide={currentSlide} />

        <div className="caption-display__links"></div>
      </div>
    </div>
  )
}

export default Slider
