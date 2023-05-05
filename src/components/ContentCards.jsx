import { useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";
import GoBackButton from "./GoBackButton";

export default function ContentCards({ countryState, onCountryStateChange }) {

  const [introCardOpen, setIntroCardOpen] = useState(true);
  const [howCardOpen, setHowCardOpen] = useState(true);
  const [warningCardOpen, setWarningCardOpen] = useState(true);

  const toggleIntroCardOpen = () => {
    setIntroCardOpen(!introCardOpen);
  };
  const toggleHowCardOpen = () => {
    setHowCardOpen(!howCardOpen);
  };
  const toggleWarningCardOpen = () => {
    setWarningCardOpen(!warningCardOpen);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setIntroCardOpen(false);
        setWarningCardOpen(false);
        setHowCardOpen(false);
      }
    }
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

 
  const renderIntro = () => {
    if (countryState !== "") {
      return <div></div>;
    } else {
      return (
        <div>
          <div className="main-container">
            <div class="card-2 diagonal-gridlines">
              <div class="card_title">
                You are using ForeignBuró
                <div>
                  <button class="circle" onClick={toggleIntroCardOpen}>
                    {introCardOpen ? <div>-</div> : <div>+</div>}
                  </button>
                </div>
              </div>

              {introCardOpen && (
                <div>
                  <div class="separator"></div>
                  <div class="card_content">
                    There is so much happening in the world around us.<br></br>{" "}
                    <br></br>
                    Yet most of what we hear about from the far corners of the
                    globe comes in through a limited lens, filtered by news
                    editors, search platforms or social media algorithms. Those
                    information gate-keepers present us only a small view of the
                    world that they have calculated the reader would want to
                    read about -- a skewed picture of reality. <br></br>
                    <br></br>
                    Using natural language processing tools and artificial
                    intelligence, this tool seeks to unskew that bias,
                    presenting a summary of the news as they are being reported
                    in each country's newspapers, instead of how they are being
                    filtered by American editors.<br></br>
                    <br></br>
                    We hope you will find this tool informative.
                  </div>
                </div>
              )}
            </div>
          </div>

          <div class="main-container">
            <div class="card-2 diagonal-gridlines">
              <div class="card_title">
                How it works
                <div>
                  <button class="circle" onClick={toggleHowCardOpen}>
                    {howCardOpen ? <div>-</div> : <div>+</div>}
                  </button>
                </div>
              </div>
              {howCardOpen && (
                <div>
                  <div class="separator"></div>
                  <div class="card_content">
                    <div class="alarm">
                      Select any of the countries listed on the left side of
                      this page to get started.<br></br> <br></br>
                      You'll be able to see a brief summary of what's being
                      reported in that country's newspapers here, as well as
                      additional information on first-hand sources <br></br>
                      <br></br>
                      You can also <a href="/dashboard">log-in here</a> to see the summaries of
                      multiple countries at the same time and customize
                      settings.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="main-container">
            <div class="card-warning diagonal-gridlines">
              <div class="card_title">
                A warning about press freedom
                <div>
                  {" "}
                  <button class="circle" onClick={toggleWarningCardOpen}>
                    {warningCardOpen ? <div>-</div> : <div>+</div>}
                  </button>
                </div>
              </div>
              {warningCardOpen && (
                <div>
                  <div class="separator"></div>
                  <div class="card_content">
                    <div class="alarm">
                      This tool aggregrates data from hundreds of news sites
                      across the world, treating the content obtained from each
                      one without fear or favor. But that doesn't mean all
                      content is equal, or that the source sites do not suffer
                      from bias <br></br>
                      <br></br>
                      More specifically, this site draws information from mass
                      media sources in country's known to pose oppressive
                      conditions for journalists, where national governments
                      either control, unduly influence or fail to appropriately
                      protect news publishers<br></br>
                      <br></br>
                      As such, this tool strives to present how news are being
                      presented to audiences across the world, but makes no
                      claims as to the accuracy of those news.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
  };



  return (
    <div>
      {renderIntro()}
      <GoBackButton countryState={countryState} onBlankButtonClick={() => onCountryStateChange("")} />
      <SummaryCard countryState={countryState} />
    </div>
  );
}
