//tests/[exercise-1-css-hh-selectors-and-properties.spec.js]

// @ts-check
const { test, expect } = require("@playwright/test");

import path from "path";
test("exercise-1-css-hh-selectors-and-properties", async ({ page }) => {
  const currentPath = path.join(process.cwd(), "ex-1/index.html");

  const url = "file:///" + currentPath;
  await page.goto(url);

  const username = page.locator("#username");
  const password = page.locator("#password");
  const email = page.locator("#email");
  const submit = page.locator("button");

  const usernameId = await username.evaluate((ele) => {
    return window.getComputedStyle(ele);
  });
  const passwordId = await password.evaluate((ele) => {
    return window.getComputedStyle(ele);
  });
  const emailId = await email.evaluate((ele) => {
    return window.getComputedStyle(ele);
  });
  const submitBtn = await submit.evaluate((ele) => {
    return window.getComputedStyle(ele);
  });
  expect(usernameId.height).toEqual("50px", "ความสูงของInputจะต้องถูกต้อง");
  expect(usernameId.width).toBe("240px", "ความกว้างของInputจะต้องถูกต้อง");
  expect(usernameId.borderRadius).toBe(
    "3px",
    "ความหนาของกรอบของInputจะต้องถูกต้อง"
  );
  expect(passwordId.height).toBe("50px", "ความสูงของInputจะต้องถูกต้อง");
  expect(passwordId.width).toBe("240px", "ความกว้างของInputจะต้องถูกต้อง");
  expect(passwordId.borderRadius).toBe(
    "3px",
    "ความหนาของกรอบของInputจะต้องถูกต้อง"
  );
  expect(emailId.height).toBe("50px", "ความสูงของInputจะต้องถูกต้อง");
  expect(emailId.width).toBe("240px", "ความกว้างของInputจะต้องถูกต้อง");
  expect(emailId.borderRadius).toBe(
    "3px",
    "ความหนาของกรอบของInputจะต้องถูกต้อง"
  );

  expect(submitBtn.border).toContain("rgb(211, 211, 211)"),
    "สีของกรอบจะต้องถูกต้อง";
  expect(submitBtn.backgroundColor).toBe("rgb(240, 230, 140)"),
    "สีของกรอบจะต้องถูกต้อง";
});
