import { computeVelocityState } from "./useScrollVelocity";

describe("computeVelocityState", () => {
  test("computes higher normalized velocity for faster scroll deltas", () => {
    const slow = computeVelocityState({
      previousVelocity: 0,
      deltaY: 40,
      deltaTime: 40,
      smoothing: 0.2,
      maxVelocity: 2.5,
    });
    const fast = computeVelocityState({
      previousVelocity: 0,
      deltaY: 200,
      deltaTime: 20,
      smoothing: 0.2,
      maxVelocity: 2.5,
    });

    expect(fast.normalizedVelocity).toBeGreaterThan(slow.normalizedVelocity);
  });

  test("applies smoothing against previous velocity", () => {
    const previousVelocity = 1.2;
    const next = computeVelocityState({
      previousVelocity,
      deltaY: 0,
      deltaTime: 16,
      smoothing: 0.2,
      maxVelocity: 2.4,
    });

    expect(next.velocity).toBeLessThan(previousVelocity);
    expect(next.velocity).toBeGreaterThan(0);
  });

  test("keeps signed direction information and clamps normalized outputs", () => {
    const upward = computeVelocityState({
      previousVelocity: 0,
      deltaY: -240,
      deltaTime: 20,
      smoothing: 0.25,
      maxVelocity: 2.2,
    });

    expect(upward.signedNormalizedVelocity).toBeLessThan(0);
    expect(upward.normalizedVelocity).toBeGreaterThan(0);
    expect(upward.normalizedVelocity).toBeLessThanOrEqual(1);
  });
});

