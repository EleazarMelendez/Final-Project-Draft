import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import GlobeApp from "@/components/Globe";
import CountryButtons from "@/components/CountryButtons";
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from "@/components/ProgressBar";
import ContentCards from "@/components/ContentCards";
import MainHeader from "@/components/MainHeader";
import Modal from "@/components/Modal";
import Menu from "@/components/Menu";

export default function Home() {
  const [countryState, setCountryState] = useState('');

  function handleCountryStateChange(newCountry) {
    setCountryState(newCountry);
  }
  
  return (
    <Container fluid>
      <Menu />      <main>
      <Row>
        <Col xs={1}  > </Col>
        <Col xs={10}  > <MainHeader />
        <ProgressBar /></Col>
          <Col xs={1}  ></Col>
      </Row>
      <Row>
        <Col xs={6} >
        <GlobeApp onCountryStateChange={handleCountryStateChange} />
        </Col>
        <Col xs={6}>
          <ContentCards onCountryStateChange={handleCountryStateChange} countryState={countryState} />
        </Col>
      </Row>
      </main>
    </Container>
  );
}