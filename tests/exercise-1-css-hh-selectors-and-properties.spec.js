//tests/[exercise-1-css-hh-selectors-and-properties.spec.js]

// @ts-check
const { test, expect } = require("@playwright/test");

import path from "path";
test("exercise-1-css-hh-selectors-and-properties", async ({ page }) => {
  const currentPath = path.join(process.cwd(), "ex-1/index.html");

  const url = "file:///" + currentPath;
  await page.goto(url);

  const submit = page.locator("button");
  const submitBtn = await submit.evaluate((ele) => {
    return window.getComputedStyle(ele).getPropertyValue("border-color");
  });

  console.log(submitBtn);

  expect(submitBtn).toContain("rgb(211, 211, 211)");
  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot({
    name: "exercise-1-css-hh-selectors-and-properties.png",
    threshold: 0.55,
    maxDiffPixels: 500,
    // maxDiffPixelRatio: 0.2,
  });
});
