function normalizeErrorMessage(rawMessage) {

  let normalized = rawMessage.trim().toLowerCase();
  normalized = normalized.replace(/\s+/g, " ");


  let category;
  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  console.log("Normalized Message:", normalized);
  console.log("Category:", category);

  return { normalized, category };
}

normalizeErrorMessage("  TimeoutError:   waiting for locator   failed  ");
normalizeErrorMessage("Locator not found on page");
normalizeErrorMessage("Unexpected error occurred");