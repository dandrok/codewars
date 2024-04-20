import { describe, it, expect } from "vitest";
import { multipleSplit } from "../javascript/Split string by multiple delimiters";

describe("multipleSplit", () => {
  it("should return correct arr", () => {
    expect(multipleSplit("hello world!", [" ", "!"])).toStrictEqual([
      "hello",
      "world",
    ]);
  });
});
