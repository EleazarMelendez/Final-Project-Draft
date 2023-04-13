// Instructs configuration on how to access the .env file

require('dotenv').config()

// Imports needed libraries from RSS-Parser and Supabase

const Parser = require("rss-parser");
const { createClient } = require("@supabase/supabase-js");

// import Parser from "rss-parser";
// import { createClient } from "@supabase/supabase-js";

// Imports links of RSS feeds to be parsed as an object

const { feedLinks } = require("./feedLinks");

// Defines necessary variables for RSS-Parser and Supabase

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

let parser = new Parser();

async function ParsingFunction() {
  // Defines AllFeeds(), an asynchronous function that parses multiple RSS feeds and maps all relevant items into an array
  const AllFeeds = async (URL, Country) => {
    const results = [];
    {
      let feed = await parser.parseURL(URL);
      const siteTitle = feed.title;
      const newsItemTitle = feed.items.map((item) => item.title);
      const newsItemPublished = feed.items.map((item) => item.pubDate);
      results.push([siteTitle, Country, newsItemTitle, newsItemPublished]);
    }
    return results;
  };

  // Loops the AllFeeds function above for every entry in the imported feedLinks object

  for (let URL in feedLinks) {
    const Country = feedLinks[URL];
    const results = await AllFeeds(URL, Country);

    // Takes all the data parsed through the AllFeeds function and defines them as variables

    for (let i = 0; i < results.length; i++) {
      const siteTitle = results[i][0];
      const country = results[i][1];
      const newsItemTitleArray = results[i][2];
      const newsItemPublishedArray = results[i][3];

      // Loops the internal, just defined NewsItemTitleArray and NewsItemPublished arrays, which contains multiple headlines and publication times,

      for (let j = 0; j < newsItemTitleArray.length; j++) {
        const newsItemTitle = newsItemTitleArray[j];
        const newsItemPublished = new Date(newsItemPublishedArray[j]);

        // Writes the desired data into Supabase every time the two-level loop is performed
        const { data, error } = await supabase.from("ParsedArticles").insert([
          {
            rss_feed_name: siteTitle,
            country: country,
            article_headline: newsItemTitle,
            article_published: newsItemPublished,
          },
        ]);

        if (error) {
          console.error(error);
        }
      }
    }
  }
}

module.exports = { ParsingFunction };
