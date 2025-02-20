import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Laster inn .env-fil fra "roten" av prosjektet:
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// E-post og passord fra miljøvariabler (på en trygg måte):
const USER_EMAIL = process.env.E2E_USER_EMAIL || "";
const USER_PASSWORD = process.env.E2E_PASSWORD || "";

test.describe("Login Tests", () => {
  test("User can successfully log in with valid credentials", async ({
    page,
  }) => {
    // Går til login-siden:
    await page.goto("http://127.0.0.1:5500/login/index.html");
    // Dette fyller inn e-posten:
    await page.fill('input[name="email"]', USER_EMAIL);
    // Dette fyller inn passordet:
    await page.fill('input[name="password"]', USER_PASSWORD);
    // Dette klikker på login-kanppen:
    await page.click('button[type="submit"]');
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login/");
    await page.fill('input[name="email"]', "wronguser@user.com");
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    // Verifiserer at en feilmelding vises:
    const messageContainer = page.locator("#message-container"); // Velg feilmelding-element
    await messageContainer.waitFor({ state: "visible", timeout: 60_000 }); // siden meldingen er sjult, og må bli "triggret" før den vises.
    await expect(messageContainer).toContainText(/noroff\.no/i);
  });
});
