import { useEffect } from 'react';
import Parser from 'rss-parser';
let parser = new Parser();

export const NewsParser = () => {
  useEffect (()=>{
    const fn = async () => {

      let feed = await parser.parseURL('https://www.reddit.com/.rss');
      console.log(feed.title);
    
      feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
      });
    
    }
    
    fn();

  }, [])


  return null;
};