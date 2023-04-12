const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//  Create a constant that represents the time exactly 24 hours ago >>

const currentTimestamp = new Date();
const timestampMinus24 = new Date(currentTimestamp.getTime() - (24 * 60 * 60 * 1000)).toISOString()

// Creates a constat that represents the country to be filtered by. (Right now, static. Later will be based on user input.)

const country = 'Peru'

// Async function to contain all the code needed to implement NLP on desired text

export default async function nlpClustering (req, res) {

// Imports necesary fields from Supabase database, using time- and country- based filter

let { data, error } = await supabase
  .from('ParsedArticles')
  .select('id,country,article_headline')
  .gte('article_published', timestampMinus24)
  .gt('tfidf_score', 6)
  .eq('country', country)

// Maps the imported headlines an UUID into two different arrays

const uniqueID = data.map(obj => obj.id);
const headlines = data.map(obj => obj.article_headline);

// Preprocess the headlines
const CleanHeadlines = headlines.map(headline => {
  return headline.toLowerCase().replace(/"/g,'').trim();
})

const response = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `Below are is a database news headlines, separated by a comma.
    Some headlines are about a topic or story that appears more than once in the dataset. Other headlines refer to a unique story.
    Look only at headlines where the topic or story repeats at least two times in the dataset. If there are no headlines where the topic
    or story repeats at least two times in the dataset, return the word "Nothing". Return every headline about a repeated topic
     or story, alongside a the number of times the story is repeated (expressed only as a number). Do not return headlines that refer to a unique topic. Use the exact following format in your answer,
     including brackets, commas and quotation marks. Do not explain what you are doing.

    [headline1: "Headline text as it appears on the dataset", Number of times the story is repeated expressed only as a number]
     
     The dataset for the headlines is: ${headlines}`}],
     temperature : 0,
})
.then(async (res) => {
  const result = res.data.choices[0].message.content;
  
  // Insert the result into a Supabase table
  const { data, error} = await supabase
    .from('ClusteredArticles')
    .insert([{ article_cluster: result,
      country: country}
    ]);

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
 

};