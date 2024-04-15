import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { observer } from 'mobx-react'

import { getProjects } from '../../api/projects'
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
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  const projects = data?.data?.projects

  useEffect(() => {
    if (projects) {
      store.init(projects)
      return () => store.destroy()
    }
  }, [store, projects?.length])

  if (isLoading) {
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
