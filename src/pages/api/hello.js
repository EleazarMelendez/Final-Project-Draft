// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Parser from 'rss-parser';
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

let parser = new Parser();

let feedLinks = {"https://www.elnuevosiglo.com.co/rss.xml":"Colombia",
"https://www.metroworldnews.com/arc/outboundfeeds/rss/?outputType=xml": "Colombia",
"https://www.cronicadelquindio.com/rss-feed/colombia":"Colombia",
"https://laopinion.com/feed/":"Colombia",
"https://www.elpais.com.co/rss":"Colombia",
"https://www.eltiempo.com/rss/colombia.xml":"Colombia",
"https://www.lanacion.com.co/feed/":"Colombia",
"https://occidente.co/feed/":"Colombia",
"https://www.teleantioquia.co/noticias/feed/":"Colombia",
"https://www.minuto30.com/feed/":"Colombia",
"https://www.kienyke.com/feed": "Colombia",
"https://rpp.pe/feed": "Peru",
"https://elbocon.pe/arcio/rss/": "Peru",
"https://elcomercio.pe/arcio/rss/": "Peru",
"https://gestion.pe/arcio/rss/": "Peru",
"https://ojo.pe/arcio/rss/": "Peru",
"https://diariocorreo.pe/arcio/rss/": "Peru",
"https://lamula.pe/feed/": "Peru",
"https://larazon.pe/feed/": "Peru"
};

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

// export default async function handler(req, res) {
//
//  const allPromises = [];
//
//  for (let URL in feedLinks) {
//    const Country = feedLinks[URL];
//    allPromises.push(AllFeeds(URL,Country));
//  };
//
//  const data = await Promise.all(allPromises)
//  res.status(200).json(data)
// }

  export default async function handler(req, res) {
  
    const allPromises = [];
    
    for (let URL in feedLinks) {
      const Country = feedLinks[URL];
      const results = await AllFeeds(URL,Country);
  
      for (let i = 0; i < results.length; i++) {
        const siteTitle = results[i][0];
        const country = results[i][1];
        const newsItemTitle = results[i][2];
        const newsItemPublished = results[i][3];
  
        // Insert the data into the Supabase table
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
    };
  
    res.status(200).json({ message: 'Data inserted into Supabase' });
  };