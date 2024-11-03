import { describe, expect, it } from "vitest";
import {
  getTotalMonths,
  monthsDiff,
  sliderKnobToSliderKnobLabel,
} from "./dateHelpers";

describe("sliderKnobToSliderKnobLabel", () => {
  describe("when given February the 20th as a date", () => {
    const date = new Date("2024-02-20T03:24:00");
    const labelerByTotalMonthsAndValue = sliderKnobToSliderKnobLabel(date);
    describe("and given 2 as the total number of months", () => {
      const labelerByValue = labelerByTotalMonthsAndValue(2);
      describe("and given a knob value of 1, thus making the corresponding month February (zero-indexed)", () => {
        const label = labelerByValue(1);
        it("should return feb 2024", () => {
          expect(label).toEqual("feb 2024");
        });
      });
      describe("and given a knob value of 0, thus making the corresponding month January (zero-indexed)", () => {
        const label = labelerByValue(0);
        it("should return ene 2024", () => {
          expect(label).toEqual("ene 2024");
        });
      });
    });
  });
  describe("when given july the 31st as a date", () => {
    const date = new Date("2024-07-31T03:24:00");
    const labelerByTotalMonthsAndValue = sliderKnobToSliderKnobLabel(date);
    describe("and given 7 as the total number of months", () => {
      const labelerByValue = labelerByTotalMonthsAndValue(7);
      describe("and given a knob value of 1, thus making the corresponding month february (zero-indexed)", () => {
        const label = labelerByValue(1);
        it("should return feb 2024", () => {
          expect(label).toEqual("feb 2024");
        });
      });
    });
  });
});

describe("monthsdiff", () => {
  describe("Given a date in Jan 2024 and a date in May 2024", () => {
    const dateInJan2024 = new Date("2024-01-20");
    const dateInMay2024 = new Date("2024-05-20");
    it("returns 4", () => {
      expect(monthsDiff(dateInJan2024, dateInMay2024)).toBe(4);
    });
  });
});

describe("getTotalMonths", () => {
  describe("Given a date in Jan 2024 and a date in May 2024", () => {
    const dateInJan2024 = new Date("2024-01-20");
    const dateInMay2024 = new Date("2024-05-20");
    it("returns 5", () => {
      expect(getTotalMonths(dateInJan2024, dateInMay2024)).toBe(5);
    });
  });
});
