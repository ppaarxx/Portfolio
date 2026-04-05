// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

window.ResizeObserver = ResizeObserverMock;
window.IntersectionObserver = IntersectionObserverMock;
global.ResizeObserver = ResizeObserverMock;
global.IntersectionObserver = IntersectionObserverMock;

window.matchMedia = window.matchMedia || function matchMedia() {
  return {
    matches: false,
    addEventListener() {},
    removeEventListener() {},
  };
};
