import { test, expect } from "@playwright/test";

test("check the Dashboard", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page.getByText("Dashboard")).toBeVisible();
});

test("check the Feed", async ({ page }) => {
  await page.goto("/feed");
  await expect(page.getByText("Activity Feed")).toBeVisible();
});

test("check the Profile", async ({ page }) => {
  await page.goto("/profile");
  await expect(page.getByText("User Profile")).toBeVisible();
});

test("check the Settings", async ({ page }) => {
  await page.goto("/settings");
  await expect(page.getByText("Settings")).toBeVisible();
});
