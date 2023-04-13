import { ParsingFunction } from "../../scripts/parser";

async function runAnalysis() {
  await ParsingFunction();
}

// Export the function for external use
export { runAnalysis };
