import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GlobeApp from "@/components/Globe";
import CountryButtons from "@/components/CountryButtons";
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from "@/components/ProgressBar";
import ContentCards from "@/components/ContentCards";
import MainHeader from "@/components/MainHeader";

export default function Home() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainHeader />
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
        <CountryButtons />
        </Col>
        <Col xs={6} className="moveup">
          <GlobeApp />
        </Col>
        <Col xs={4}>
          <ProgressBar />
          <ContentCards />
        </Col>
      </Row>
    </Container>
  );
}
