import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const currentTimestamp = new Date();
const timestamp = new Date(currentTimestamp.getTime() - (1 * 60 * 60 * 1000)).toISOString()

export default async function Last36(req, res) {

let { data, error } = await supabase
  .from('ParsedArticles')
  .select('id,country,article_headline')
  .gte('article_published', timestamp)

const uniqueID = data.map(obj => obj.id);
const headlines = data.map(obj => obj.article_headline);

const natural = require('natural');
const tokenizer = new natural.AggressiveTokenizerEs();
const TfIdf = natural.TfIdf;

const tfidf = new TfIdf();
  
  headlines.forEach(headline => {
    tfidf.addDocument(tokenizer.tokenize(headline));
  });

  const similarities = [];

headlines.forEach((headline, i) => {
  const scores = [];

  headlines.forEach((headline2, j) => {
    if (i === j) {
      scores.push(0);
    } else {
      const score = tfidf.tfidf(tokenizer.tokenize(headline), j);
      scores.push(score);
    }
  });

  similarities.push(scores.reduce((accumulator, currentValue) => accumulator + currentValue));
});

console.log(similarities);
console.log(headlines);



const result = similarities.reduce((obj, key, index) => {
  obj[key] = values[index];
  return obj;
}, {});

console.log(result);

res.status(200).json({ message: 'okthen' }); 

}