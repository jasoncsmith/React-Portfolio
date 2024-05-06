import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { SLIDE_INTERVAL } from '../constants'
import { getProjects } from '../../../api/projects'
import SliderStore from '../contexts'
import Slider from '..'

describe('Test Slider Component', () => {
  test('renders Slider loader', async () => {
    const { getByRole, getByLabelText } = render(
      <QueryClientProvider client={new QueryClient({})}>
        <Slider />
      </QueryClientProvider>
    )

    expect(getByRole('alert')).toBeInTheDocument()
    expect(getByLabelText('Loading')).toBeInTheDocument()
  })

  test('slider store receive 7 slides and start playing on instantiation', async () => {
    const buffer = 500 // TODO: this seems excessive should be at most 100
    const store = new SliderStore()

    const data = await getProjects()

    await waitFor(() => store.init(data.data.projects))
    expect(store.numOfSlides).toEqual(7)
    expect(store.isAtStart).toEqual(true)
    expect(store.prevIndex).toBe(6)

    await new Promise(r => setTimeout(r, SLIDE_INTERVAL + buffer))
    expect(store.isPlaying).toEqual(true)
    expect(store.index).toBeGreaterThan(0)

    waitFor(() => store.goTo(6))
    expect(store.isAtEnd).toBe(true)
    expect(store.nextIndex).toBe(0)
  })
})
