import { describe, it, expect } from "vitest";
import { solve } from "../javascript/Simple directions reversal";

describe("simple directions reversal", () => {
  const cases = [
    {
      startingArr: [
        "Begin on 3rd Blvd",
        "Right on First Road",
        "Left on 9th Dr",
      ],
      expectedArr: [
        "Begin on 9th Dr",
        "Right on First Road",
        "Left on 3rd Blvd",
      ],
    },
    {
      startingArr: ["Begin on Road A"],
      expectedArr: ["Begin on Road A"],
    },
    {
      startingArr: [
        "Begin on 5th Lane",
        "Right on Numbers Freeway",
        "Left on 11th Byway",
        "Left on Eighth Grove",
        "Right on 25th Ln",
        "Left on Seventh Close",
        "Right on Red Place",
        "Right on Codewars Place",
        "Left on 25th Ave",
        "Right on String Ave",
        "Left on Ruby Road",
        "Left on 6th Avenue",
        "Right on Numbers Avenue",
        "Right on Numbers Boulevard",
        "Right on Codewars Expressway",
        "Left on 6th Lane",
        "Right on 5th Dr",
        "Right on 25th Backroad",
        "Right on 2nd Street",
        "Left on Nim Pkwy",
        "Left on 2nd Street",
        "Left on 9th Grove",
      ],
      expectedArr: [
        "Begin on 9th Grove",
        "Right on 2nd Street",
        "Right on Nim Pkwy",
        "Right on 2nd Street",
        "Left on 25th Backroad",
        "Left on 5th Dr",
        "Left on 6th Lane",
        "Right on Codewars Expressway",
        "Left on Numbers Boulevard",
        "Left on Numbers Avenue",
        "Left on 6th Avenue",
        "Right on Ruby Road",
        "Right on String Ave",
        "Left on 25th Ave",
        "Right on Codewars Place",
        "Left on Red Place",
        "Left on Seventh Close",
        "Right on 25th Ln",
        "Left on Eighth Grove",
        "Right on 11th Byway",
        "Right on Numbers Freeway",
        "Left on 5th Lane",
      ],
    },
  ];

  it.each(cases)(
    "should return correct result",
    ({ startingArr, expectedArr }) => {
      expect(solve(startingArr)).toStrictEqual(expectedArr);
    }
  );
});
