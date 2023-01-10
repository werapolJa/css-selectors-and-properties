//tests/[exercise-1-css-hh-selectors-and-properties.spec.js]

// @ts-check
const { test, expect } = require("@playwright/test");

import path from "path";
test("exercise-1-css-hh-selectors-and-properties", async ({ page }) => {
  const currentPath = path.join(process.cwd(), "ex-1/index.html");

  const url = "file:///" + currentPath;
  await page.goto(url);

  expect(
    await page.screenshot({
      fullPage: true,
    })
  ).toMatchSnapshot({
    name: "exercise-1-css-hh-selectors-and-properties-chromium-darwin.png",
    threshold: 0.5,
    maxDiffPixels: 10000,
    // maxDiffPixelRatio: 0.2,
  });
});
