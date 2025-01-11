const { test, expect } = require("@playwright/test");

test("Navigate to venue details", async ({ page }) => {
  // Navigerer til startsiden:
  await page.goto("http://127.0.0.1:5500/");

  // Vent på at listen over venues skal laste:
  await page.waitForSelector(".venue-list");

  // Klikker på det første elementet i listen:
  const firstVenue = await page.locator(".venue-list .venue-item").first();
  await firstVenue.click();

  // Venter på at detaljesiden skal laste:
  await page.waitForSelector("h1");

  // Sjekker at overskriften inneholder teksten "Venue details":
  const heading = await page.locator("h1"); // Oppdaterer selector om nødvendig
  await expect(heading).toHaveText(/Venue details/i);
});
