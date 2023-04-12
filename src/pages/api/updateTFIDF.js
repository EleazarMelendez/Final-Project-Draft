import { nlpProcessing } from './appletForTFIDF';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function updateTFIDF (res, req) {
const importedResult = await nlpProcessing();
  console.log(importedResult);

for (const [id, value] of Object.entries(importedResult)) {
   const { data, error } = await supabase
      .from('ParsedArticles')
      .update({ tfidf_score: value })
      .match({ id: id });
    
    if (error) {
      console.error(error);
    } else {
      console.log(`Updated ${importedResult.length} row(s) for id ${id}`);
    }
  }

        
};

export { updateTFIDF };