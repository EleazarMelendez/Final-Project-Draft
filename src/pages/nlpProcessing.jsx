import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const nlp = () => {

    const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)

const currentTimestamp = new Date();
const timestamp = new Date(currentTimestamp.getTime() - (1 * 60 * 60 * 1000)).toISOString()
const [fetchError, setFetchError] = useState(null)
const [headlines, setHeadlines] = useState(null)

useEffect( () => {
    const fetchHeadlines = async () =>
    {
        const {data, error} = await supabase
        .from('ParsedArticles')
        .select('id,country,article_headline')
        .gte('article_published',timestamp)

  if (error) {
    setFetchError('This fucking fuck is fucking fucked.')
    console.log(error)
    setHeadlines(null)
  }

    if (data) {
    setHeadlines(data)
    setFetchError(null)
    }
}

fetchHeadlines()
    }
    , [])


return (<div>
{fetchError && (<p>{fetchError}</p>)}
{headlines && (<div>
    {headlines.map(headline =>(<p>{headline.article_headline},{timestamp}</p>))}
</div>)}

    </div>)
}

export default nlp