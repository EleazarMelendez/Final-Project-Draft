import { useState, useEffect } from "react";
import Loader from "./Loader";
import GoBackButton from "./GoBackButton";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SummaryCard ({countryState, onCountryStateChange}) {
    const [showLoader, setShowLoader] = useState(true);
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
    
      
    useEffect(() => {
      setShowLoader(true);
    }, [countryState]);
  
    if (countryState === "") {
      return <div></div>;
    } else if (showLoader) {
      return (
        <div className="loader-container">
          <Loader />
          {setTimeout(() => setShowLoader(false), 4000)}
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="goback-adjust">
            <GoBackButton
              countryState={countryState}
              onBlankButtonClick={() => onCountryStateChange("")}
            />
          </div>
          <div class="card-2 diagonal-gridlines">
            <div class="card_title">
              Below is an AI-generated summary of whats being published by the newspapers in {countryState}
            </div>
            <div class="separator"></div>
            <div class="card_content">
              <p>{summary}</p>
            </div>
          </div>
        </div>
      );
    }
  };