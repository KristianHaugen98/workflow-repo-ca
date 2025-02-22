// Dette sikrer at Vitest ikke prøver å kjøre Playwright-testene.

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/e2e/**"], // Dette gjør slik at den kjører kun unit tester i `tests/unit/`.
  },
});
