import React, { useState } from 'react'
import { observer } from 'mobx-react'

import SliderContainer from './components/SliderContainer'
import CaptionContainer from './components/CaptionContainer'
import ViewPort from './components/ViewPort'
import Caption from './components/Caption'
import Menu from './components/Menu'
import Nav from './components/Nav'

import SliderStore, { SliderStoreContext } from './contexts'
import { DURATION_CAPTION } from './constants'
import { ImageProps } from './components/Image/Index'

import './index.scss'

function Slider() {
  const [store] = useState(() => new SliderStore())
  const {
    data,
    index,
    prevIndex,
    nextIndex,
    // viewingIndex,
    // isAnimatingRight,
    // isAnimatingLeft,
    isCaptionHiding,
    isCaptionHidden,
    isCaptionShowing,
    goTo,
    goToNext,
    goToPrevious,
    setIsCaptionHiding,
    setIsCaptionHidden,
    setIsCaptionShowing,
    isPlaying,
    play,
    pause,
  } = store

  const isAnimatingRight = false
  const isAnimatingLeft = false

  const onMouseOver = (): void => pause()
  const onMouseLeave = (): void => play()

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

  const toggleCaptions = () => {
    !!isCaptionHidden ? showCaptions() : hideCaptions()
  }

  // const currentSlide = data[viewingIndex]
  const currentSlide = data[index]
  const currentImage: ImageProps = currentSlide?.image
  const previousImage: ImageProps = data[prevIndex]?.image
  const nextImage: ImageProps = data[nextIndex]?.image

  return (
    <SliderStoreContext.Provider value={store}>
      <div id="slider1" className="slider">
        <SliderContainer isCaptionHidden={isCaptionHidden} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <ViewPort
            isAnimatingRight={isAnimatingRight}
            isAnimatingLeft={isAnimatingLeft}
            previousImage={previousImage}
            currentImage={currentImage}
            nextImage={nextImage}
          />

          <Nav onPrevious={goToPrevious} onNext={goToNext} />

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
    </SliderStoreContext.Provider>
  )
}

export default observer(Slider)
