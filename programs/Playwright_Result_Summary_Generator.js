function summarizeSteps(stepResults) {
    
  let totalSteps = stepResults.length;
  let passedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;
  let totalDuration = 0;
  let failedSteps = [];

  stepResults.forEach(step => {
    totalDuration += step.durationMs;

    switch (step.status) {
      case "passed":
        passedCount++;
        break;
      case "failed":
        failedCount++;
        failedSteps.push(step.name);
        break;
      case "skipped":
        skippedCount++;
        break;
    }
  });
  const failedStepNames = failedSteps.join(", ");

  console.log("===== Playwright Steps Summary =====");
  console.log("Total Steps:", totalSteps);
  console.log("Passed:", passedCount);
  console.log("Failed:", failedCount);
  console.log("Skipped:", skippedCount);
  console.log("Total Duration (ms):", totalDuration);
  console.log("Failed Step Names:", failedStepNames);
}

  const steps = [
    { name: "open login", status: "passed", durationMs: 400 }, 
    { name: "fill form", status: "failed", durationMs: 700 }, 
    { name: "submit", status: "skipped", durationMs: 0 }
];


summarizeSteps(steps);