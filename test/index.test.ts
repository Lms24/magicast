import { expect, it, describe } from "vitest";
import { parseCode, generateCode } from "../src";

describe("packageName", () => {
  it("parse, update, generate", () => {
    const _module = parseCode(`
      export const a: any = {}
      export default defineConfig({
        // Modules
        modules: ["a"]
      })
    `);

    const arg = _module.exports.default.arguments[0];
    arg.props.modules.push("b");

    const { code } = generateCode(_module);

    expect(code).toMatchInlineSnapshot(`
      "
            export const a: any = {}
            export default defineConfig({
              // Modules
              modules: [\\"a\\", \\"b\\"]
            })
          "
    `);
  });
});
