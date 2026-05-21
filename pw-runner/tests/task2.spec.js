import { test, expect } from "@playwright/test";

test("check the Dashboard", async ({ page }) => {
  await page.goto("http://localhost:5173/dashboard");
  await page.getByText("Dashboard").toBeVisible();
  await expect(page.getByText("Dashboard")).toBeVisible();
});

test("check the Feed", async ({ page }) => {
  await page.goto("http://localhost:5173/feed");
  await page.getByText("Feed").toBeVisible();
  await expect(page.getByText("Feed")).toBeVisible();
});

test("check the Profile", async ({ page }) => {
  await page.goto("http://localhost:5173/profile");
  await page.getByText("Profile").toBeVisible();
  await expect(page.getByText("Profile")).toBeVisible();
});

test("check the Settings", async ({ page }) => {
  await page.goto("http://localhost:5173/settings");
  await page.getByText("Settings").toBeVisible();
  await expect(page.getByText("Profile")).toBeVisible();
});
