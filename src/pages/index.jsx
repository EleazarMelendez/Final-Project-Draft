import { Footer } from "@/components/Footer";
import { Welcome } from "@/components/Welcome";

import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GlobeApp from "@/components/Globe";
import CountryButtons from "@/components/CountryButtons";

export default function Home() {
  return (
    <div className="container">
      <div>
        <CountryButtons />{" "}
      </div>
      <div>
        <GlobeApp />
      </div>
    </div>
  );
}
