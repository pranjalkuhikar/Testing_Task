import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByRole("textbox", { name: "Enter your email" }).click();
  await page
    .getByRole("textbox", { name: "Enter your email" })
    .fill("test@test.com");
  await page.getByRole("textbox", { name: "Enter your password" }).click();
  await page
    .getByRole("textbox", { name: "Enter your password" })
    .fill("password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Welcome to the Dashboard")).toBeVisible();
  await expect(page.getByRole("button", { name: "Click Me" })).toBeVisible();

  await page.getByRole("button", { name: "Click Me" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
});
