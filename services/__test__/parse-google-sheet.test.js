import { describe, expect, it } from "vitest";
import { parseTSVToJSON } from "../parse-tsv.cjs";
import parsedAttacks from "./ataques.json";

describe("fetchTSV", () => {
  it("parses TSV to JSON as expected", async () => {
    const result = await parseTSVToJSON(
      "services/__test__/sheet.tsv",
      "services/__test__/colors-by-type.tsv",
    );
    expect(result).toEqual(parsedAttacks);
  });
});
