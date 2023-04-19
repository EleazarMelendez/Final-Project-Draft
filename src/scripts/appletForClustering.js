// Instructs configuration on how to access the .env file

require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

//  Create a constant that represents the time exactly 24 hours ago >>

const currentTimestamp = new Date();
const timestampMinus24 = new Date(currentTimestamp.getTime() - (24 * 60 * 60 * 1000)).toISOString()

// Creates a constat that represents the country to be filtered by. (Right now, static. Later will be based on user input.)

// const country = 'Peru'

// Async function to contain all the code needed to implement NLP on desired text

async function nlpClustering (country) {

// Imports necesary fields from Supabase database, using time- and country- based filter

let { data, error } = await supabase
  .from('ParsedArticles')
  .select('id,country,article_headline')
  .gte('article_published', timestampMinus24)
  .gt('tfidf_score', 4)
  .eq('country', country)
  .order('tfidf_score',  { ascending: false });
 

// Maps the imported headlines an UUID into two different arrays

const uniqueID = data.map(obj => obj.id);
const headlines = data.map(obj => obj.article_headline);

// Preprocess and truncate the headlines

let truncatedHeadlines = [];

let totalLength = 0;
for (let i = 0; i < headlines.length; i++) {
  const headline = headlines[i];
  if (totalLength + headline.length <= 9000) {
    truncatedHeadlines.push(headline);
    totalLength += headline.length;
  } else {
    break;
  }
}

const CleanHeadlines = truncatedHeadlines.map(headline => {
  return headline.toLowerCase().replace(",", " ").replace(/"/g,'').trim();
})

const response = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {role: "user", content: 
    `Do not explain what you are doing. Below are some news headlines, separated by a comma.
    The headlines are in random order. 
    Cluster the headlines that share the same or similar news topics.
    In each cluster, mark how many headlines are included (expressed as a numerical value).
    Include several keywords about the topics that news topics that the headlines share 
 Your answer should look like as follows including brackets, commas and quotation marks. 

    [Cluster #1, Number of headlines expressed numerically
      Keywords
      headline1: "Headline text as it appears on the dataset",
      headline2: "Headline text as it appears on the dataset",
      headline3: "Headline text as it appears on the dataset",
      ...
    ],
    [Cluster #2, Number of headlines expressed numerically,
      Keywords,
      headline4: "Headline text as it appears on the dataset",
      headline5: "Headline text as it appears on the dataset",
      headline6: "Headline text as it appears on the dataset",
      ...
    ],
     
    Here are the headlines: ${CleanHeadlines}`}],
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
  } else {
   console.log("Clusters created in Supabase table")
  }
})
.catch((error) => {
  console.error(error);
 console.log("Something failed");
});
 

};

module.exports = {nlpClustering};