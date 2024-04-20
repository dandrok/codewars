import { test, expect, it } from "vitest";
import { hasUniqueChars } from "../javascript/All unique";

test.skip("hasUniqueChars", () => {
  it("should return true for string with unique characters", () => {
    expect(hasUniqueChars("abcdefg")).toBe(true);
  });

  it("should return false for string with duplicate characters", () => {
    expect(hasUniqueChars("hello")).toBe(false);
  });

  it("should return true for empty string", () => {
    expect(hasUniqueChars("")).toBe(true);
  });
});
