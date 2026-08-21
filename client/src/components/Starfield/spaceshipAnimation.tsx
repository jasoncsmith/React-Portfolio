import React, { createContext, useCallback, useContext, useReducer } from 'react'

type State = {
  playing: boolean
}

type Action = { type: 'PLAY' } | { type: 'PAUSE' } | { type: 'TOGGLE' }

type ContextValue = {
  play: () => void
  pause: () => void
  toggle: () => void
  playing: boolean
}

const defaultState: State = {
  playing: false,
}

const SpaceContext = createContext<ContextValue | null>(null)

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'PLAY':
      return { ...state, playing: true }
    case 'PAUSE':
      return { ...state, playing: false }
    case 'TOGGLE':
      return { ...state, playing: state.playing ? false : true }

    default:
      return state
  }
}

export const SpaceProvider = ({ children }: { children: React.ReactNode }) => {
  const init: State = { ...defaultState }
  const [state, dispatch] = useReducer(reducer, init)

  // actions
  const play = useCallback(() => dispatch({ type: 'PLAY' }), [])
  const pause = useCallback(() => dispatch({ type: 'PAUSE' }), [])
  const toggle = useCallback(() => dispatch({ type: 'TOGGLE' }), [])

  const context: ContextValue = {
    ...state,
    play,
    pause,
    toggle,
  }

  return <SpaceContext.Provider value={context}>{children}</SpaceContext.Provider>
}

export function useSpace(): ContextValue {
  const context = useContext(SpaceContext)

  if (!context) {
    throw new Error('useSpace must be used within a SpaceProvider')
  }

  return context
}
