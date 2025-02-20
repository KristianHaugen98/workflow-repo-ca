import { test, expect } from "@playwright/test";

//1.

test("Navigate to venue details", async ({ page }) => {
  // Navigerer til startsiden:
  await page.goto("http://127.0.0.1:5500/", {
    waitUntil: "domcontentloaded",
    timeout: 30_000,
  });

  // 2. Venter på at vanues lastes:

  await page.waitForResponse(
    (Response) =>
      Response.url().includes(`venues`) && Response.status() === 200,
    { timeout: 15_000 },
  );

  // Vent på at listen over venues skal laste (med CSS classe):
  await page.waitForSelector("#venue-container", { timeout: 60_000 });

  // Klikker på det første elementet i listen:
  const firstVenue = page.locator("#venue-container").first();
  await firstVenue.click();

  // Sjekker at overskriften inneholder teksten "Welcome to this site":
  const heading = page.locator("h1"); // Oppdaterer selector om nødvendig
  await expect(heading).toHaveText("Welcome to this site");
});
