import { test as teardown } from "@playwright/test";
import fs from "fs/promises";

teardown("cleanup saved login session", async () => {
  console.log("Running teardown cleanup...");
  await fs.rm("storageState.json", { force: true });
  console.log("Teardown cleanup complete.");
});
