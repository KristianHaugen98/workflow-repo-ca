import { describe, it, expect, vi, beforeEach } from "vitest";
import getUserName from "../utils/getUseName";

describe("getUserName", () => {
  // Før hver test, mock localStorage
  beforeEach(() => {
    globalThis.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    };
  });

  it("should return the name from the user object in storage", () => {
    // Mock verdien som kommer fra localStorage
    localStorage.getItem.mockReturnValue(JSON.stringify({ name: "Kristian" }));

    const result = getUserName();
    expect(result).toBe("Kristian");
  });

  it("should return null when no user exists in storage", () => {
    // Mock at localStorage ikke finner noe
    localStorage.getItem.mockReturnValue(null);

    const result = getUserName();
    expect(result).toBe(null);
  });
});
