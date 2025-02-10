import { describe, it, expect } from "vitest";
import isActivePath from "../isActivePath.js";

// Gruppere relaterte tester:

describe("isActivePath", () => {
  // Dette spesiferer en spesifik test:
  it("should return true when currentPath matches href", () => {
    const currentPath = "/home";
    const href = "/home";

    const result = isActivePath(currentPath, href);

    // Sjekker forventet resultat:
    expect(result).toBe(true);
  });
});
