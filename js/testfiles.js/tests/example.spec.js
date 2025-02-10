// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Workflow CA");
});
