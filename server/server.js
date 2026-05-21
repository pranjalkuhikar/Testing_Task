import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Webhook received! Triggering tests...");

  exec(
    "npx playwright test",
    { cwd: "C:/Users/pranj/OneDrive/Desktop/Task/pw-runner" },
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`Output:\n${stdout}`);
    },
  );

  res.json({ status: "triggered" });
});

app.get("/", (req, res) => {
  res.send("Webhook Server Running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Webhook endpoint: POST http://localhost:${PORT}/webhook`);
});
