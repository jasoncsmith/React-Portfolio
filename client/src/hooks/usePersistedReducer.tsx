import { createContext, useContext, useReducer, useEffect, useCallback, Dispatch, ReactNode } from 'react'
import useLocalStorage from './useLocalStorage'

// https://www.benmvp.com/blog/sync-localstorage-react-usereducer-hook/

const STORAGE_KEY = 'YOUR_STORAGE_KEY'
const initialState = {
  data: [],
  status: 'loading', // 'loading', 'error', 'ready', 'active', 'done'
}

enum Actions {
  'data/Received' = 'data/Received',
  dataFailed = 'dataFailed',
  start = 'start',
  finish = 'finish',
  restart = 'restart',
}

interface State {
  data: Schema[]
  status: string
  dispatch?: Dispatch<Action>
}

interface Schema {
  someProp1: string
  someProp2: string
}

interface Action {
  type: string
  payload?: any
}

const ExampleContext = createContext<null | State>(null)

function reducer(state: State, action: Action) {
  switch (action.type) {
    case Actions['data/Received']:
      return {
        ...state,
        data: action.payload,
        status: 'ready',
      }
    case Actions.dataFailed:
      return {
        ...state,
        status: 'error',
      }
    case Actions.start:
      return {
        ...state,
        status: 'active',
      }
    case Actions.finish:
      return {
        ...state,
        status: 'done',
      }
    case Actions.restart:
      return { ...initialState, data: state.data, status: 'ready' }

    default:
      throw new Error('Action unkonwn')
  }
}

function ExampleProvider({ children }: { children: ReactNode }) {
  const [persistedState, setPersistedState] = useLocalStorage<State>(STORAGE_KEY, initialState)

  const reducerLocalStorage = useCallback(
    (state: State, action: Action) => {
      const newState = reducer(state, action)
      setPersistedState(newState)
      return newState
    },
    [setPersistedState]
  )

  const [state, dispatch] = useReducer(reducerLocalStorage, persistedState)

  useEffect(
    function () {
      if (state.data?.length === 0) {
        fetch('http://localhost:5000/data')
          .then(res => res.json())
          .then(data => dispatch({ type: Actions['data/Received'], payload: data }))
          .catch(() => dispatch({ type: Actions.dataFailed }))
      }
    },
    [state.data?.length]
  )

  //create one context for each piece of state so that a change to one prop doesnt trigger
  // a re-render for all components that consume the state but have no relationship to the value changed.
  // can even useMemo the object provided to the value prop
  return <ExampleContext.Provider value={{ ...state, dispatch }}>{children}</ExampleContext.Provider>
}

function useExample() {
  const context = useContext(ExampleContext)
  if (!context) throw new Error('ExampleContext was used outside of the ExampleProvider')
  return context
}

export { ExampleProvider, useExample }
