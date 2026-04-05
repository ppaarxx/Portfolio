import { mapScrubToSettle } from "./scrollMotion";

describe("mapScrubToSettle", () => {
  test("uses readability-first defaults at entry", () => {
    const result = mapScrubToSettle(0, {
      fromX: -50,
      fromY: 40,
      fromScale: 0.9,
      settleStart: 0.6,
      settleEnd: 0.9,
    });

    expect(result.x).toBeCloseTo(-50, 4);
    expect(result.y).toBeCloseTo(40, 4);
    expect(result.scale).toBeCloseTo(0.9, 4);
    expect(result.blur).toBeCloseTo(0, 4);
    expect(result.opacity).toBeCloseTo(0.8, 4);
    expect(result.alignProgress).toBe(0);
    expect(result.settled).toBe(false);
  });

  test("still supports explicit blur config even though hooks do not consume it", () => {
    const result = mapScrubToSettle(0, {
      fromBlur: 12,
      fromOpacity: 0.9,
    });

    expect(result.blur).toBeCloseTo(12, 4);
    expect(result.opacity).toBeCloseTo(0.9, 4);
  });

  test("settles to aligned values at settle end", () => {
    const result = mapScrubToSettle(1, {
      fromX: -50,
      fromY: 40,
      fromScale: 0.9,
      settleStart: 0.6,
      settleEnd: 0.9,
    });

    expect(result.x).toBeCloseTo(0, 4);
    expect(result.y).toBeCloseTo(0, 4);
    expect(result.rotateX).toBeCloseTo(0, 4);
    expect(result.scale).toBeCloseTo(1, 4);
    expect(result.blur).toBeCloseTo(0, 4);
    expect(result.alignProgress).toBeCloseTo(1, 4);
    expect(result.settled).toBe(true);
  });

  test("transitions monotonically through scrub and settle ranges", () => {
    const early = mapScrubToSettle(0.2, {
      fromY: 100,
      settleStart: 0.55,
      settleEnd: 0.9,
    });
    const mid = mapScrubToSettle(0.6, {
      fromY: 100,
      settleStart: 0.55,
      settleEnd: 0.9,
    });
    const late = mapScrubToSettle(0.9, {
      fromY: 100,
      settleStart: 0.55,
      settleEnd: 0.9,
    });

    expect(early.y).toBeGreaterThan(mid.y);
    expect(mid.y).toBeGreaterThanOrEqual(late.y);
    expect(early.alignProgress).toBeLessThan(mid.alignProgress);
    expect(mid.alignProgress).toBeLessThanOrEqual(late.alignProgress);
  });
});
