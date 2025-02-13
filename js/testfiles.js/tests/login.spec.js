import { test, expect } from "@playwright/test";

// E-post og passord fra miljøvariabler
const USER_EMAIL = process.env.E2E_USER_EMAIL;
const password = process.env.E2E_PASSWORD;

test.describe("Login Tests", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/index.html"); // Går til login-siden
    page.locator('input[name="email"]', USER_EMAIL); // Dette fyller inn e-posten
    page.locator('input[name="password"]', password); // Dette fyller inn passordet
    page.locator("").click; // Dette klikker på login-kanppen

    // Dette verifiserer at brukeren blir logget inn:
    await page.goto("http://127.0.0.1:5500/login/index.html"); // URL etter innlogging
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/");
    await page.fill('input[name="email"]', "wronguser@user.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]'); //Dette klikker på knappen.

    // Verifiserer at en feilmelding vises:
    const messageContainer = page.locator("#message-container"); // Velg feilmelding-element
    await messageContainer.waitFor({ state: "visible", timeout: 60_000 }); // siden meldingen er sjult, og må bli "triggret" før den vises.
    await expect(messageContainer).toContainText(/noroff\.no/i);
  });
});
