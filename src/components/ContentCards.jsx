import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useWindupString } from "windups";
import GoBackButton from "./GoBackButton";
import { render } from "react-dom";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContentCards({countryState}) {
  const [summaries, setSummaries] = useState([]);

  const [introCardOpen, setIntroCardOpen] = useState(false);
  const [howCardOpen, setHowCardOpen] = useState(true);
  const [warningCardOpen, setWarningCardOpen] = useState(false);
  
  const toggleIntroCardOpen = () => {setIntroCardOpen(!introCardOpen);};
  const toggleHowCardOpen = () => {setHowCardOpen(!howCardOpen);};
  const toggleWarningCardOpen = () => {setWarningCardOpen(!warningCardOpen);};

  const renderSummaryCard = () => {
    if (countryState === '') {
      return  <div></div>;
    } else {
      return  <div>
        <div>
        <GoBackButton countryState={countryState} />
        </div>
      <div class="main-container card-2 diagonal-gridlines">
      <div class="card_title">Below is an AI-generated summary of what's being published by the newspapers in {country}</div>
      <div class="separator"></div>
      <div class="card_content">
      <p >{summary}</p>
      </div>
    </div></div>
    }
  }

  const renderIntro = () => {
    if (countryState !== '') {
      return  <div></div>;
    } else {
      return  <div>
<div className="main-container">
        <div class="card-2 diagonal-gridlines">
          <div class="card_title">You are using ForeignBuró
<div><button class="circle"onClick={toggleIntroCardOpen} >

{introCardOpen ? (
        <div>-</div>
      ) : (
        <div>+</div>
      )}

</button></div>
        </div>

          {introCardOpen && (<div>
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
      )}
      </div>
      </div>

      <div class="main-container"><div class="card-2 diagonal-gridlines">
        <div class="card_title">How it works
        <div><button class="circle"onClick={toggleHowCardOpen} >

        {howCardOpen ? (
        <div>-</div>
      ) : (
        <div>+</div>
      )}
</button></div></div>
{howCardOpen && (<div>
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
        </div>)}
      </div>
      </div>

      <div className="main-container">
      <div class="card-warning diagonal-gridlines">
        <div class="card_title">A warning about press freedom
       <div> <button class="circle"onClick={toggleWarningCardOpen} >

       {warningCardOpen ? (
        <div>-</div>
      ) : (
        <div>+</div>
      )}

</button></div></div>
{warningCardOpen && (<div>
          <div class="separator"></div>
        <div class="card_content">
          <div class="alarm">
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
        </div>)}
      </div>
      </div>        
        </div>;
    }
  }

  useEffect(() => {
    getSummaries();
  }, []);

  async function getSummaries() {
    const { data } = await supabase
      .from("ClusteredArticles")
      .select("article_summary, country");
    setSummaries(data);
  }

  const country = countryState; // the country you're interested in

  const summary = summaries.find(obj => obj.country === country)?.article_summary;

  return (

  <div>

      {renderIntro()}
 {renderSummaryCard()}
    </div>
  );
}
