import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'

import SliderContainer from './components/SliderContainer'
import CaptionContainer from './components/CaptionContainer'
import ViewPort from './components/ViewPort'
import Caption from './components/Caption'
import Controls from './components/Controls'
import Nav from './components/Nav'
import SliderStore, { SliderStoreContext } from './contexts'
import Loader from '../Loader'
import Fade from '../Fade'

import styles from './index.module.scss'

function Slider() {
  const [store] = useState(() => new SliderStore())
  useEffect(() => {
    store.init()
    return () => store.destroy()
  }, [store])

  if (!store.slides?.length) {
    return <Loader className={styles.loader} />
  }

  return (
    <SliderStoreContext.Provider value={store}>
      <Fade>
        <div className={styles.slider}>
          <SliderContainer>
            <ViewPort />
            <Nav />
            <Controls />
          </SliderContainer>

          <CaptionContainer>
            <Caption />
          </CaptionContainer>
        </div>
      </Fade>
    </SliderStoreContext.Provider>
  )
}

export default observer(Slider)
