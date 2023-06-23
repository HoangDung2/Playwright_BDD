const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName:"Real-Word Report",
  displayDuration:false,
  pageTitle:"Report Real-Word",
  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Koushik-PC",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" },
    ],
  },
});