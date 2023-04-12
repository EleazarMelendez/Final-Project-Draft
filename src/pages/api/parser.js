// Import needed libraries from RSS-Parser and Supabase

import Parser from 'rss-parser';
import { createClient } from '@supabase/supabase-js'

// Import links of RSS feeds to be parsed as an object

import { feedLinks } from './rssFeedLinks';

// Define necessary variables for RSS-Parser and Supabase

const suspabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

let parser = new Parser();

// Defines AllFeeds(), an asynchronous function that parses multiple RSS feeds and maps all relevant items into an array

const AllFeeds = async (URL, Country) => {
  
  const results = [];

  {
    let feed = await parser.parseURL(URL);
    const siteTitle = feed.title;
    const newsItemTitle = feed.items.map(item => item.title);
    const newsItemPublished = feed.items.map(item => item.pubDate);
    results.push([siteTitle, Country, newsItemTitle, newsItemPublished]);
  }
  return results;
};

// Asynchronous function that loops the various internal arrays withing the "results" array, 
// then pushes values to a Supabase database

  export default async function ParsingFunction(req, res) {
    
    for (let URL in feedLinks) {
      const Country = feedLinks[URL];
      const results = await AllFeeds(URL,Country);
  
      for (let i = 0; i < results.length; i++) {
        const siteTitle = results[i][0];
        const country = results[i][1];
        const newsItemTitleArray = results[i][2];
        const newsItemPublishedArray = results[i][3];
     
          for (let j = 0; j < newsItemTitleArray.length; j++) {
            const newsItemTitle = newsItemTitleArray[j];
            const newsItemPublished = new Date (newsItemPublishedArray[j]);

            const { data, error } = await supabase
            .from('ParsedArticles')
            .insert([{ rss_feed_name: siteTitle, 
              country: country,
              article_headline: newsItemTitle, 
              article_published: newsItemPublished }]);

              if (error) {
                console.error(error);
              }
            }
          }
        }
        res.status(200).json(Parsed article data inserted into Supabase);        
      };

      export { ParsingFunction };