import { test, expect } from "@playwright/test";

test("login setUp", async ({ page }) => {
  await page.goto("/login");
  await page.getByLabel("Enter your email").fill("test@test.com");
  await page.getByLabel("Enter your password").fill("password");
  await page.getByRole("button", { name: "Login" }).click();

  await page.context().storageState({ path: "storageState.json" });

  await expect(page.getByText("Dashboard")).toBeVisible();
});
