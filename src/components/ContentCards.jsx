import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContentCards() {
  const [summaries, setSummaries] = useState([]);
  const [goBack , setGoBack] = useState(null);
  const [introOpen, setIntroOpen] = useState(null);
  const [howToOpen, setHowToOpen] = useState(true);
  const [warningOpen, setWarningOpen] = useState(null);
  

  useEffect(() => {
    getSummaries();
  }, []);

  async function getSummaries() {
    const { data } = await supabase
      .from("ClusteredArticles")
      .select("article_summary, country");
    setSummaries(data);
  }

  const country = "Argentina"; // the country you're interested in

  const summary = summaries.find(obj => obj.country === country)?.article_summary;

  return (
    <div>
      <div className="btn-cont">
   <a class="btn" href="#">
          You have selected {country}. Click here to select a different country.
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
        </div>

      <div class="main-container">
        <div class="card-2 diagonal-gridlines">
          <div class="card_title">You are using ForeignBuró</div>
          <div class="separator"></div>
          <div class="card_content">
            There is so much happening in the world around us.<br></br>{" "}
            <br></br>
            Yet most of what we hear about from the far corners of the globe
            comes in through a limited lens, filtered by news editors, search
            platforms or social media algorithms. Those information gate-keepers
            present us only a small view of the world that they have calculated
            the reader would want to read about -- a skewed picture of reality.{" "}
            <br></br>
            <br></br>
            Using natural language processing tools and artificial intelligence,
            this tool seeks to unskew that bias, presenting a summary of the
            news as they are being reported in each country's newspapers,
            instead of how they are being filtered by American editors.<br></br>
            <br></br>
            We hope you will find this tool informative.
          </div>
        </div>
      </div>
      <div class="main-container card-2 diagonal-gridlines">
        <div class="card_title">How it works</div>
        <div class="separator"></div>
        <div class="card_content">
          <div class="alarm">
            Select any of the countries listed on the left side of this page to
            get started.<br></br> <br></br>
            You'll be able to see a brief summary of what's being reported in
            that country's newspapers here, as well as additional information on
            first-hand sources <br></br>
            <br></br>
            You can also log-in <a>here</a> to see the summaries of multiple
            countries at the same time and customize settings.
          </div>
        </div>
      </div>
      <div class="card-warning main-container diagonal-gridlines">
        <div class="card_title main-container">A warning about press freedom</div>
        <div class="separator"></div>
        <div class="card_content">
          <div class="alarm main-container">
            This tool aggregrates data from hundreds of news sites across the
            world, treating the content obtained from each one without fear or
            favor. But that doesn't mean all content is equal, or that the
            source sites do not suffer from bias <br></br>
            <br></br>
            More specifically, this site draws information from mass media
            sources in country's known to pose oppressive conditions for
            journalists, where national governments either control, unduly
            influence or fail to appropriately protect news publishers<br></br>
            <br></br>
            As such, this tool strives to present how news are being presented
            to audiences across the world, but makes no claims as to the
            accuracy of those news.
          </div>
        </div>
      </div>

      <div class="main-container card-2 diagonal-gridlines">
          <div class="card_title">Here's what's being published by the newspapers in {country}</div>
          <div class="separator"></div>
          <div class="card_content">
          <p className="typing-simple">{summary}</p>
          </div>
        </div>
    </div>
  );
}
