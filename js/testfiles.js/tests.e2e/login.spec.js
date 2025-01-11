import { test, expect } from "@playwright/test";

// Brukernavn og passord fra miljøvariabler
const username = process.env.E2E_USERNAME;
const password = process.env.E2E_PASSWORD;

test.describe("Login Tests", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login"); // Går til login-siden
    await page.fill('"input[name="username"]', username); // Dette fyller inn brukernavnet
    await page.fill('"input[name="password"]', password); // Dette fyller inn passordet
    await page.fill('"input[type="submit"]'); // Dette klikker på login-kanppen

    // Dette verifiserer at brukeren blir logget inn:
    await expect(page).toHaveURL("/dashboard"); // Eksempel-URL etter innlogging
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");
    await page.fill('"input[name="username"]', "wronguser");
    await page.fill('"input[name="password"]', "wrongpassword");
    await page.fill('"input[type="submit"]');

    // Verifiserer at en feilmelding vises:
    const errorMessage = await page.locator(".error-message"); // Velg feilmelding-element
    await expect("errorMessage").toBeVisible();
    await expect(errorMessage).toHaveText("Invalid username or password");
  });
});
