import { test, expect } from "@playwright/test";

test("simple test", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Enter your email").fill("test@test.com");
  await page.getByLabel("Enter your password").fill("password");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Welcome back!")).toBeVisible();
  await expect(page.getByRole("button", { name: "Click Me" })).toBeVisible();
  await page.getByRole("button", { name: "Click Me" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
});
