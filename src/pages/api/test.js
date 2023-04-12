import { ParsingFunction } from './parser';
import { nlpProcessing } from './appletForTFIDF';
import { updateTFIDF } from './updateTFIDF';
import { nlpClustering } from './appletForClustering;'
import { nlpSummary } from './appletForSummary'

async function runAnalysis() {
    await ParsingFunction();
    await nlpProcessing();
    await updateTFIDF();
    await nlpClustering();
    await nlpSummary();
    }
    
    // Export the function for external use
    export { runAnalysis };