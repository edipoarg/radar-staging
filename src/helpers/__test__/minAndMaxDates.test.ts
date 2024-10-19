import { describe, expect, it } from "vitest";
import {
  getMinAndMaxDatesMillisFromJsDates,
  getMinAndMaxJsDatesFromDates,
} from "../minAndMaxDates";

describe("getMinAndMaxDatesMillisFromJsDates and getMinAndMaxJsDatesFromDates", () => {
  describe("if they transform dates back and forth from dates to millis four times", () => {
    it("the second and fourth values are the same starting with millis", () => {
      const min = 1580774400000;
      const max = 1721692800000;

      const secondValues = getMinAndMaxJsDatesFromDates({ max, min });
      const thirdValues = getMinAndMaxDatesMillisFromJsDates(
        secondValues.min,
        secondValues.max,
      );
      const fourthValues = getMinAndMaxJsDatesFromDates(thirdValues);
      expect(secondValues).toEqual(fourthValues);
    });
    it("the second and fourth values are the same starting with dates", () => {
      const dates = {
        min: new Date("2020-02-03T03:00:00.000Z"),
        max: new Date("2024-07-23T02:59:00.000Z"),
      };

      const secondValues = getMinAndMaxDatesMillisFromJsDates(
        dates.min,
        dates.max,
      );
      const thirdValues = getMinAndMaxJsDatesFromDates(secondValues);
      const fourthValues = getMinAndMaxDatesMillisFromJsDates(
        thirdValues.min,
        thirdValues.max,
      );
      expect(secondValues).toEqual(fourthValues);
    });
  });
});
