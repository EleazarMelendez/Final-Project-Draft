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

  res.status(200).json({data})
  console.log(data)
}