import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import React from "react";
import App from "./App";

jest.mock("lenis", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    raf: jest.fn(),
    destroy: jest.fn(),
    scrollTo: jest.fn(),
  })),
}));

jest.mock("./utils/device", () => ({
  getIsMobile: jest.fn(() => true),
}));

jest.mock("./components/SkillOrb.jsx", () => () => <div data-testid="skill-orb" />);
jest.mock("./components/ContactCanvas.jsx", () => () => null);
jest.mock("./components/HeroCanvas.jsx", () => () => null);
jest.mock("./components/GlobalBackground.jsx", () => () => null);

beforeAll(() => {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: 500,
  });
  Object.defineProperty(window.navigator, "userAgent", {
    configurable: true,
    value: "Mobi",
  });
});

test("renders the portfolio hero content", async () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );

  expect(await screen.findByRole("button", { name: /view my work/i })).toBeInTheDocument();
  expect(await screen.findByText(/let's build something/i)).toBeInTheDocument();
  expect(screen.queryByText(/currently learning/i)).not.toBeInTheDocument();
});
