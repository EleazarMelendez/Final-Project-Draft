const { nlpClustering } = require("./appletForClustering");
const { nlpSummary } = require("./appletForSummary");
const { nlpProcessing } = require("./appletForTFIDF");
const  {ParsingFunction} = require("./parser");
const { updateTFIDF } = require("./updateTFIDF");


const main = async () => {
  await ParsingFunction();
  await nlpProcessing();
  await updateTFIDF();
  await nlpClustering();
  await nlpSummary();
};

main();
