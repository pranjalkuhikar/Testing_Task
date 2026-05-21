import { test, expect } from "@playwright/test";

test("login setUp", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await page.getByLabel("Enter the email").fill("test@test.com");
  await page.getByLabel("Enter the password").fill("password");
  await page.getByRole("button", { name: "Login" }).click();

  await page.context().storageState({ path: "storageState.json" });

  await expect(page.getByText("Welcome to the Dashboard")).toBeVisible();
});
