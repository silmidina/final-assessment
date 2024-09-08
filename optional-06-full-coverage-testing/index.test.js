// index.test.js
import { test } from "node:test";
import { strict as assert } from "node:assert";
import sum from "./index.js";

test("sum adds two positive numbers correctly", async (t) => {
  await t.test("should return 5 when adding 2 and 3", () => {
    assert.equal(sum(2, 3), 5);
  });
});

test("sum returns 0 when one or both arguments are not numbers", async (t) => {
  await t.test("should return 0 when first argument is a string", () => {
    assert.equal(sum("2", 3), 0);
  });
  await t.test("should return 0 when second argument is a string", () => {
    assert.equal(sum(2, "3"), 0);
  });
  await t.test("should return 0 when both arguments are strings", () => {
    assert.equal(sum("2", "3"), 0);
  });
  await t.test("should return 0 when first argument is undefined", () => {
    assert.equal(sum(undefined, 3), 0);
  });
  await t.test("should return 0 when second argument is undefined", () => {
    assert.equal(sum(2, undefined), 0);
  });
  await t.test("should return 0 when both arguments are undefined", () => {
    assert.equal(sum(undefined, undefined), 0);
  });
});

test("sum returns 0 when one or both arguments are negative", async (t) => {
  await t.test("should return 0 when first argument is negative", () => {
    assert.equal(sum(-2, 3), 0);
  });
  await t.test("should return 0 when second argument is negative", () => {
    assert.equal(sum(2, -3), 0);
  });
  await t.test("should return 0 when both arguments are negative", () => {
    assert.equal(sum(-2, -3), 0);
  });
});

test("sum returns correct result when one argument is zero", async (t) => {
  await t.test("should return 2 when adding 2 and 0", () => {
    assert.equal(sum(2, 0), 2);
  });
  await t.test("should return 0 when adding 0 and 0", () => {
    assert.equal(sum(0, 0), 0);
  });
});

test("sum adds decimal numbers correctly", async (t) => {
  await t.test("should return 5.5 when adding 2.5 and 3", () => {
    assert.equal(sum(2.5, 3), 5.5);
  });
  await t.test("should return 0.5 when adding 0.1 and 0.4", () => {
    assert.equal(sum(0.1, 0.4), 0.5);
  });
});
