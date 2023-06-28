import React, { useEffect, useState, useCallback, useRef } from 'react';
import Caption from './caption';
import MenuItem from './menuItem';
import { slides as data } from '../../data/data.js';
import './slider.scss';

const slideWidth = 495;
const durationSlide = 375;
const durationCaption = 450;
const durationTimeout = 250;
const timer = 3000;

const Slide = ({ name, alt }) => {
    return (
        <img
            className="slider__slide"
            src={`images/${name}`}
            alt={alt}
            title={alt}
            height={350}
            width={slideWidth}
        />
    );
};

function Slider() {
    const intervalRef = useRef();
    const [index, setIndex] = useState(0);
    const [viewingIndex, setViewingIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimatingRight, setIsAnimatingRight] = useState(false);
    const [isAnimatingLeft, setIsAnimatingLeft] = useState(false);
    const [isCaptionHiding, setIsCaptionHiding] = useState(false);
    const [isCaptionHidden, setIsCaptionHidden] = useState(false);
    const [isCaptionShowing, setIsCaptionShowing] = useState(false);

    const onMouseOver = () => {
        setIsHovered(true);
        pause();
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    const hideCaptions = () => {
        setIsCaptionHiding(true);
        setTimeout(() => {
            setIsCaptionHidden(true);
            setIsCaptionHiding(false);
        }, durationCaption);
    };

    const showCaptions = () => {
        setIsCaptionShowing(true);
        setIsCaptionHidden(false);
        setTimeout(() => {
            setIsCaptionShowing(false);
        }, durationCaption);
    };

    const goto = (idx) => {
        setIndex(idx);
        setViewingIndex(idx);
    };

    const pause = () => {
        clearInterval(intervalRef.current);
        setIsPlaying(false);
    };

    const previous = () => {
        if (isAnimatingLeft === true) {
            return;
        }

        let idx = null;

        if (index === 0) {
            idx = data.length - 1;
        } else {
            idx = index - 1;
        }

        setPrevIndex(idx);
        setIndex(idx);

        setIsAnimatingLeft(true);
        setTimeout(() => {
            setViewingIndex(idx);
            setTimeout(setIsAnimatingLeft, durationTimeout, false); // setTimeout fixes jank in Edge
        }, durationSlide);
    };

    const next = useCallback(() => {
        if (isAnimatingRight === true) {
            return;
        }
        let idx = null;
        if (index === data.length - 1) {
            idx = 0;
        } else {
            idx = index + 1;
        }

        setNextIndex(idx);
        setIndex(idx);

        setIsAnimatingRight(true);
        setTimeout(() => {
            setViewingIndex(idx);
            setTimeout(setIsAnimatingRight, durationTimeout, false); // setTimeout fixes jank in Edge
        }, durationSlide);
    }, [index, isAnimatingRight]);

    const play = useCallback(() => {
        setIsPlaying(true);
        intervalRef.current = setTimeout(next, timer);
    }, [next]);

    useEffect(() => {
        if (isHovered === false) {
            play();
        }
        return () => pause();
    }, [play, isHovered]);

    const menuItems = data.map((t, idx) => (
        <MenuItem
            key={`mi-${t.id}`}
            isActive={index === idx}
            onMenuClick={() => goto(idx)}
            slide={data[idx]}
        />
    ));

    const slidePrev = data[prevIndex].image;
    const slideCurrent = data[viewingIndex].image;
    const slideNext = data[nextIndex].image;

    return (
        <div
            id="slider1"
            className="slider"
        >
            <div
                className={
                    isCaptionHidden
                        ? 'slider__container slider__container--captions-hidden'
                        : 'slider__container'
                }
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
                        <Slide {...slidePrev} />
                        <Slide {...slideCurrent} />
                        <Slide {...slideNext} />
                    </div>
                </div>

                <nav>
                    <button
                        type="button"
                        className="nav__btn btn-prev"
                        onClick={previous}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        className="nav__btn btn-next"
                        onClick={next}
                    >
                        Next
                    </button>
                </nav>

                <div className="slider__controls">
                    <div className="controls__slider-menu">
                        {menuItems}
                        <div className="slider-menu__play-state">
                            {isPlaying === true ? 'Playing' : 'Paused'}
                        </div>
                    </div>

                    {isCaptionHidden === false ? (
                        <button
                            type="button"
                            className="btn btn-toggle-captions"
                            onClick={hideCaptions}
                        >
                            Hide Captions
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="btn btn-toggle-captions"
                            onClick={showCaptions}
                        >
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
                <Caption
                    isUpating={isAnimatingRight | isAnimatingLeft}
                    slide={data[viewingIndex]}
                />

                <div className="caption-display__links"></div>
            </div>
        </div>
    );
}

export default Slider;
