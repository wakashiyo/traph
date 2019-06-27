import assert = require("assert");
import { hello } from "../src/index";

describe("index module", () => {
  const name = "taro";
  it("index method", () => {
    assert(hello(name) === "Hello " + name);
  });
});
