import { useState, useEffect } from "react";
import Loader from "./Loader";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function PersonalSummary ({countryState}) {
    const [summaries, setSummaries] = useState([]);

    const summary = summaries.find(
        (obj) => obj.country === countryState
      )?.article_summary;

    async function getSummaries() {
        const { data } = await supabase
          .from("ClusteredArticles")
          .select("article_summary, country");
        setSummaries(data);
      }

    useEffect(() => {
        getSummaries();
      }, []);
    
      return (
        <div className="main-container">
          <div class="card-2 diagonal-gridlines">
            <div class="card_title">
              Below is an AI-generated summary of whats being published by the newspapers in {countryState}
            </div>
            <div class="separator"></div>
            <div class="card_content">
              <p>{summary}</p>
            </div>
          </div>
          <br></br>
        </div>
      );
    };