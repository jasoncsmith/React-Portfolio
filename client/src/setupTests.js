import '@testing-library/jest-dom'
// learn more: https://github.com/testing-library/jest-dom

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

// TODO: IntersectionObserver will not work if component is rendered more than once in test
