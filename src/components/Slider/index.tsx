import React, { useEffect, useState, useCallback, useRef } from 'react'
import db from '../../data/db.json'

import Caption from './components/Caption'
import CaptionContainer from './components/CaptionContainer'
import ViewPort from './components/ViewPort'
import Nav from './components/Nav'
import Menu from './components/Menu'

import { ImageProps } from './components/Image/Index'
import { DURATION_SLIDE, DURATION_CAPTION, DURATION_JANK_DELAY, SLIDE_INTERVAL } from './constants'

import './index.scss'
import SliderContainer from './components/SliderContainer'

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

  const goTo = (idx: number): void => {
    setIndex(idx)
    setViewingIndex(idx)
  }

  const toggleCaptions = () => {
    !!isCaptionHidden ? showCaptions() : hideCaptions()
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
      setTimeout(setIsAnimatingLeft, DURATION_JANK_DELAY, false) // setTimeout fixes jank in Edge
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
      setTimeout(setIsAnimatingRight, DURATION_JANK_DELAY, false) // setTimeout fixes jank in Edge
    }, DURATION_SLIDE)
  }, [index, isAnimatingRight])

  const play = useCallback(() => {
    setIsPlaying(true)
    intervalRef.current = window.setTimeout(next, SLIDE_INTERVAL)
  }, [next])

  useEffect(() => {
    if (isHovered === false) {
      play()
    }
    return () => pause()
  }, [play, isHovered])

  const currentSlide = data[viewingIndex]
  const slideImagePrev: ImageProps = data[prevIndex]?.image
  const slideImageCurrent: ImageProps = currentSlide?.image
  const slideImageNext: ImageProps = data[nextIndex]?.image

  return (
    <div id="slider1" className="slider">
      <SliderContainer isCaptionHidden={isCaptionHidden} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <ViewPort
          isAnimatingRight={isAnimatingRight}
          isAnimatingLeft={isAnimatingLeft}
          slideImagePrev={slideImagePrev}
          slideImageCurrent={slideImageCurrent}
          slideImageNext={slideImageNext}
        />

        <Nav onPrevious={previous} onNext={next} />

        <Menu items={data} isPlaying={isPlaying} onMenuClick={goTo} index={index}>
          <button type="button" className="btn btn-toggle-captions" onClick={toggleCaptions}>
            {!!isCaptionHidden ? 'Show' : 'Hide'} Captions
          </button>
        </Menu>
      </SliderContainer>

      <CaptionContainer
        isCaptionHiding={isCaptionHiding}
        isCaptionHidden={isCaptionHidden}
        isCaptionShowing={isCaptionShowing}
      >
        <Caption isUpdating={isAnimatingRight || isAnimatingLeft} slide={currentSlide} />
      </CaptionContainer>
    </div>
  )
}

export default Slider
