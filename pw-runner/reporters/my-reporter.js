import fs from "fs";

export default class MyReporter {
  constructor() {
    this.testResults = [];
  }

  onTestEnd(test, result) {
    this.testResults.push({
      title: test.title,
      status: result.status,
      duration: result.duration,
      error: result.error ? result.error.message : null,
    });
  }

  async onEnd(result) {
    const passed = this.testResults.filter((t) => t.status === "passed").length;
    const failedTests = this.testResults.filter(
      (t) => t.status === "failed" || t.status === "timedOut",
    );
    const failed = failedTests.length;
    const total = this.testResults.length;

    const summary = {
      total,
      passed,
      failed,
      failedDetails: failedTests.map((t) => ({
        title: t.title,
        error: t.error,
      })),
    };

    const webhookUrl = process.env.PW_REPORTER_WEBHOOK;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(summary),
        });
        console.log("\n✅ Successfully posted results to webhook!");
      } catch (error) {
        console.error("\n⚠️ Failed to post results to webhook:", error.message);
      }
    } else {
      try {
        fs.writeFileSync("summary.json", JSON.stringify(summary, null, 2));
        console.log(
          "\n✅ Results written to summary.json (Webhook URL not set)",
        );
      } catch (error) {
        console.error("\n⚠️ Failed to write summary.json:", error.message);
      }
    }
  }
}
