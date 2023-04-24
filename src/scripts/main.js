const { nlpClustering } = require("./appletForClustering");
const { nlpSummary } = require("./appletForSummary");
const { nlpProcessing } = require("./appletForTFIDF");
const  {ParsingFunction} = require("./parser");
const { updateTFIDF } = require("./updateTFIDF");
const {deleteParsed} = require("./deleteParsed")
const { deleteClustered } =require("./deleteClustered")

let countryArray = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Dominican Republic",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Puerto Rico",
  "Uruguay",
  "Venezuela"
]

const main = async () => {
  await deleteParsed();

  await deleteClustered();

  await ParsingFunction();
  
  for (let country of countryArray) {
    await updateTFIDF(country);
  };

  for (let country of countryArray) {
    await nlpClustering(country);
  };

  await new Promise((resolve) => setTimeout(resolve, 180000));

  for (let country of countryArray) {
    await nlpSummary(country);
  }

};

main();
