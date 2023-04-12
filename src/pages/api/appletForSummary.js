const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

let country = "Peru"

export default async function nlpSummary (req, res) {
  let { data, error } = await supabase
  .from('ClusteredArticles')
  .select('id,article_cluster')
  .eq('country', country)

  const cluster = data.map(obj => obj.article_cluster);
  const id = data.map(obj => obj.id);
  const stringID = id[0]

const response = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `Below are a list of news headlines, including the frequency a particular news topic was written
    about in the last 24 hours by the newspapers in ${country}. Write a conversational English-language summary (not a list) suitable for a 15-year-old of the most popular topics.
    Pick no more than six topics. If there are more than six topics with the same popularity, pick the topics at random.
    
    The news headlines are ${cluster}`}],
    temperature : 0.8})
.then(async (res) => {
  const result = res.data.choices[0].message.content;
  
  // Insert the result into a Supabase table
  const { data, error} = await supabase
    .from('ClusteredArticles')
    .update({ article_summary: result })
    .match({ id: stringID });

  if (error) {
    console.error(insertError);
    res.status(500).json({ error: 'Failed to insert data into Supabase table' });
  } else {
    res.status(200).json({ message: 'Data inserted into Supabase table', data: insertedData });
  }
})
.catch((error) => {
  console.error(error);
  res.status(500).json({ error: 'Failed to get response from OpenAI API' });
});

console.log(stringID);

}

export {nlpSummary};