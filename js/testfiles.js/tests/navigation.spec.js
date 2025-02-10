const { test, expect } = require("@playwright/test");

test("Navigate to venue details", async ({ page }) => {
  // Navigerer til startsiden:
  await page.goto("http://127.0.0.1:5500/");

  // Venter på at API-kallet blir fulført:
  await page.waitForResponse(
    (response) =>
      response.url().includes("/venues") && response.status() === 200,
  );

  // Vent på at listen over venues skal laste (med CSS classe):
  await page.waitForSelector("#venue-container"), { timeout: 60_000 };

  // Klikker på det første elementet i listen:
  const firstVenue = page.locator("#venue-container").first();
  await firstVenue.click();

  // Sjekker at overskriften inneholder teksten "Venue details":
  const heading = page.locator("h1"); // Oppdaterer selector om nødvendig
  await expect(heading).toHaveText(/Venue details/i);
});
