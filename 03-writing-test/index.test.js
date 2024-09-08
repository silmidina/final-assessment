// 03-writing-test/index.test.js
import { test } from "node:test";
import { strict as assert } from "node:assert";
import { sum } from "./index.js"; // Mengimpor fungsi sum

test("sum should correctly add two numbers", () => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(-1, 1), 0);
  assert.strictEqual(sum(-1, -1), -2);
  assert.strictEqual(sum(0, 0), 0);
});

test("sum should return a number", () => {
  assert.strictEqual(typeof sum(1, 2), "number");
});
