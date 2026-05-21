import { test, expect } from "@playwright/test";

test("check the Dashboard", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(
    page.getByRole("heading", { name: "Dashboard", exact: true }),
  ).toBeVisible();
});

test("check the Feed", async ({ page }) => {
  await page.goto("/feed");
  await expect(
    page.getByRole("heading", { name: "Activity Feed", exact: true }),
  ).toBeVisible();
});

test("check the Profile", async ({ page }) => {
  await page.goto("/profile");
  await expect(
    page.getByRole("heading", { name: "User Profile", exact: true }),
  ).toBeVisible();
});

test("check the Settings", async ({ page }) => {
  await page.goto("/settings");
  await expect(
    page.getByRole("heading", { name: "Settings", exact: true }),
  ).toBeVisible();
});
