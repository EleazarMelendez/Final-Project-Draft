// Instructs configuration on how to access the .env file

require('dotenv').config()

const { nlpProcessing } = require('./appletForTFIDF');

// Imports Supabase hook >>

const { createClient } = require("@supabase/supabase-js");

// Defines values used in Supabase hook >>

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function updateTFIDF () {
const importedResult = await nlpProcessing();
  console.log(importedResult);

for (const [id, value] of Object.entries(importedResult)) {
   const { data, error } = await supabase
      .from('ParsedArticles')
      .update({ tfidf_score: value })
      .match({ id: id });
    
    if (error) {
      console.error(error);
    } else {
      console.log(`Updated ${importedResult.length} row(s) for id ${id}`);
    }
  
  }
};

module.exports = { updateTFIDF };