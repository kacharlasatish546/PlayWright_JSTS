function planBrowserExecution(allBrowsers, blockedBrowsers) {
  const runnableBrowsers = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));

  const runList = runnableBrowsers.join(", ") || "None";
  const skipList = blockedBrowsers.join(", ") || "None";
  const executionPlan = `Run on: ${runList} | Skip: ${skipList}`;

  return {
    runnableBrowsers,
    blockedBrowsers,
    executionPlan
  };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

const result = planBrowserExecution(allBrowsers, blockedBrowsers);

console.log("Runnable Browsers:", result.runnableBrowsers);
console.log("Blocked Browsers:", result.blockedBrowsers);
console.log("Execution Plan:", result.executionPlan);