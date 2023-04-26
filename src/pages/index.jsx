import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import GlobeApp from "@/components/Globe";
import CountryButtons from "@/components/CountryButtons";
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from "@/components/ProgressBar";
import ContentCards from "@/components/ContentCards";
import MainHeader from "@/components/MainHeader";
import Menu from "@/components/Menu";

export default function Home() {
  const [countryState, setCountryState] = useState('');
  const [mobileView, setMobileView] = useState(false)

  function handleCountryStateChange(newCountry) {
    setCountryState(newCountry);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setMobileView(true);
      }
    }
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  const renderAsMobileOrDesktop = () => {
    if (mobileView === false) {
      return <div>
              <Row>
        <Col xs={6} >
        <GlobeApp onCountryStateChange={handleCountryStateChange} />
        </Col>
        <Col xs={6}>
          <ContentCards onCountryStateChange={handleCountryStateChange} countryState={countryState} />
        </Col>
      </Row>
      </div>;
    } else {
      return (
 <div>
  <Row>
   <ContentCards onCountryStateChange={handleCountryStateChange} countryState={countryState} />
 </Row>
   <Row>
 
 <GlobeApp onCountryStateChange={handleCountryStateChange} />
</Row> 

      </div>
      );
    }
  };


  return (
    <Container fluid>
      <Menu />      <main>
      <Row>
        <Col xs={1}  > </Col>
        <Col xs={10}  > <MainHeader />
        <ProgressBar /></Col>
          <Col xs={1}  ></Col>
      </Row>

<div>{renderAsMobileOrDesktop()}</div>
    
      </main>
    </Container>
  );
}