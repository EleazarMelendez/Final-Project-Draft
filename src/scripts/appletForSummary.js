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


async function nlpSummary (country) {
  let { data, error } = await supabase
  .from('ClusteredArticles')
  .select('id,article_cluster')
  .eq('country', country)

  const cluster = data.map(obj => obj.article_cluster);
  const id = data.map(obj => obj.id);
  const stringID = id[0]

const response = openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `Do not explain what you are doing. Do not mention "clusters" or "clustering" in your response.
    
    Below are clusters of news headlines, selected because they are about similar news stories. Each cluster notes the frequency a particular news topic was written
    about in the last 24 hours by the newspapers in ${country}. 
    
    The news headlines are organized in the following format:

    [Cluster #1, frequency of the news topic in the headlines expressed numerically
      headline1: "Headline text ",
      headline2: "Headline text ",
      headline3: "Headline text ",
      ...
    ],
    [Cluster #2, frequency of the news topic in the headlines expressed numerically
      headline4: "Headline text ",
      headline5: "Headline text ",
      headline6: "Headline text ",
      ...
    ],

    Read only the clusters where the frequency number is 4 or more, and ignore all other clusters. Ignore news headlines related to horoscopes. Write a conversational English-language summary (not a list) suitable for a 15-year-old of the clusters you are reading.
    Do not mention "clusters" or "clustering" in the response.
    
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
  } else {
   console.log("Summary inserted into Supabase table")
  }
})
.catch((error) => {
  console.error(error);
  console.log("Something failed");
});

}

module.exports = {nlpSummary};