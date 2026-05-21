import { test, expect } from "@playwright/test";

test("upload success shows green toast", async ({ page }) => {
  await page.route("/api/upload", (route) => {
    route.fulfill({ status: 200, body: "" });
  });
  await page.goto("/upload");
  await page.locator("#file-upload").setInputFiles("tests/Hello.pdf");
  await page.getByRole("button", { name: "Upload" }).click();
  await expect(page.locator(".Toastify__toast--success")).toBeVisible();
  await expect(page.getByRole("alert")).toContainText(
    "File uploaded successfully",
  );
});

test("upload error shows red toast", async ({ page }) => {
  await page.route("/api/upload", (route) => {
    route.fulfill({ status: 500, body: "" });
  });
  await page.goto("/upload");
  await page.locator("#file-upload").setInputFiles("tests/Hello.pdf");
  await page.getByRole("button", { name: "Upload" }).click();
  await expect(page.locator(".Toastify__toast--error")).toBeVisible();
  await expect(page.getByRole("alert")).toContainText(
    "Something went wrong. Please try again.",
  );
});
