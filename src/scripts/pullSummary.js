require('dotenv').config()

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function pullSummary (country) {
  let { data, error } = await supabase
  .from('ClusteredArticles')
  .select('country,article_summary')

   let latestSummaries = data;

   console.log(latestSummaries)
   
   return latestSummaries;
  }

  module.exports = { pullSummary };
