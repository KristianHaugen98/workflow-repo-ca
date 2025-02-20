import { describe, it, expect } from "vitest";
import isActivePath from "../isActivePath.js";

// Gruppere relaterte tester:

describe("isActivePath", () => {
  // Dette spesiferer en spesifik test:
  it("should return true when currentPath matches href", () => {
    expect(isActivePath("/home", "/home")).toBe(true);
  });

  it("should return true when currentPath is '/' and href is '/'", () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it("should return true when currentPath is '/index.html' and href is '/'", () => {
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  it("should return true when currentPath starts with href followed by slash", () => {
    expect(isActivePath("/about/team", "/about")).toBe(true);
  });

  it("should return false when currentPath is a similar but different path", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
