import express from "express";
import { exec } from "child_process";

const app = express();
const port = 3000;

app.post("/webhook", (req, res) => {
  res.status(200).json({ status: "triggered" });
  console.log("Webhook received! Triggering Playwright tests...");

  exec("npx playwright test", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing tests: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Tests stderr:\n${stderr}`);
    }
    console.log(`Tests output:\n${stdout}`);
  });
});

app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
  console.log(
    `Run 'ngrok http ${port}' in another terminal to expose this server.`,
  );
});
