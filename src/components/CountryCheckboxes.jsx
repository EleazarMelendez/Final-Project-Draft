import { useState } from "react";

export default function CountryCheckboxes() {

  const [argentinaSubscribe, setArgentinaSubscribe] = useState(false);
  const [boliviaSubscribe, setBoliviaSubscribe] = useState(false);
  const [chileSubscribe, setChileSubscribe] = useState(false);
  const [colombiaSubscribe, setColombiaSubscribe] = useState(false);
  const [costaRicaSubscribe, setCostaRicaSubscribe] = useState(false);
  const [cubaSubscribe, setCubaSubscribe] = useState(false);
  const [dominicanRepublicSubscribe, setDominicanRepublicSubscribe] = useState(false);
  const [ecuadorubscribe, setEcuadorSubscribe] = useState(false);
  const [elSalvadorSubscribe, setElSalvadorSubscribe] = useState(false);
  const [guatemalaSubscribe, setGuatemalaSubscribe] = useState(false);
  const [hondurasSubscribe, setHondurasSubscribe] = useState(false);
  const [mexicoSubscribe, setMexicoSubscribe] = useState(false);
  const [nicaraguaSubscribe, setNicaraguaSubscribe] = useState(false);
  const [panamaSubscribe, setPanamaSubscribe] = useState(false);
  const [paraguaySubscribe, setParaguaySubscribe] = useState(false);
  const [peruSubscribe, setPeruSubscribe] = useState(false);
  const [puertoRicoSubscribe, setPuertoRicoSubscribe] = useState(false);
  const [uruguaySubscribe, setUruguaySubscribe] = useState(false);
  


    return (
      <div>
            <section class="app">
  <h1>Select <span class="blue-color">your favorite countries</span></h1>
  <h3 class="gray-color">Choose the countries you want to see the summaries for</h3>
<div className="section">
  <article  class="feature1">
    <input onChange={(event) => {
        setArgentinaSubscribe(event.target.checked);
      }} type="checkbox" checked={argentinaSubscribe} id="feature1"/>
    <div>
      <span>
       Argentina
      </span>
    </div>
  </article>
  
  <article class="feature2">
    <input type="checkbox" id="feature2"/>
    <div>
      <span>
        Bolivia
      </span>
    </div>
  </article>
  
  <article class="feature3">
    <input type="checkbox" id="feature3"/>
    <div>
      <span>
  Chile
      </span>
    </div>
  </article>
  
  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Colombia
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Costa Rica
      </span>
    </div>
  </article>
 
  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Cuba
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Dominican Republic
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Ecuador
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       El Salvador
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Guatemala
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Honduras
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
       Mexico
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Nicaragua
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Panama
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Paraguay
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Peru
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Puerto Rico
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Uruguay
      </span>
    </div>
  </article>

  <article class="feature1">
    <input type="checkbox" id="feature1"/>
    <div>
      <span>
Venezuela
      </span>
    </div>
  </article>
  </div>

</section>

<section>

<div>
  <h3>
    <span class="blue-color">Do it now </span>Yes. Do IT!
  </h3>
  </div>
  <a href="#" class="upgrade-btn">Submit</a>
  
</section>
</div>
      
    );
  }
  