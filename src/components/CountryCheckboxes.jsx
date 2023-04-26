import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useUser } from "@supabase/auth-helpers-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CountryCheckboxes() {

const user = useUser();

  const [argentinaSubscribe, setArgentinaSubscribe] = useState(null);
  const [boliviaSubscribe, setBoliviaSubscribe] = useState(null);
  const [chileSubscribe, setChileSubscribe] = useState(null);
  const [colombiaSubscribe, setColombiaSubscribe] = useState(null);
  const [costaRicaSubscribe, setCostaRicaSubscribe] = useState(null);
  const [cubaSubscribe, setCubaSubscribe] = useState(null);
  const [dominicanRepublicSubscribe, setDominicanRepublicSubscribe] = useState(null);
  const [ecuadorSubscribe, setEcuadorSubscribe] = useState(null);
  const [elSalvadorSubscribe, setElSalvadorSubscribe] = useState(null);
  const [guatemalaSubscribe, setGuatemalaSubscribe] = useState(null);
  const [hondurasSubscribe, setHondurasSubscribe] = useState(null);
  const [mexicoSubscribe, setMexicoSubscribe] = useState(null);
  const [nicaraguaSubscribe, setNicaraguaSubscribe] = useState(null);
  const [panamaSubscribe, setPanamaSubscribe] = useState(null);
  const [paraguaySubscribe, setParaguaySubscribe] = useState(null);
  const [peruSubscribe, setPeruSubscribe] = useState(null);
  const [puertoRicoSubscribe, setPuertoRicoSubscribe] = useState(null);
  const [uruguaySubscribe, setUruguaySubscribe] = useState(null);
  const [venezuelaSubscribe, setVenezuelaSubscribe] = useState(null);
  
  const submitPreferences = async () => {
    if (user) {
    const { data, error } = await supabase
      .from('UserPreferences')
      .update({
        argentina_subscribe: argentinaSubscribe,
        bolivia_subscribe: boliviaSubscribe,
        chile_subscribe: chileSubscribe,
        colombia_subscribe: colombiaSubscribe,
        costarica_subscribe: costaRicaSubscribe,
        cuba_subscribe: cubaSubscribe,
        dominicanrepublic_subscribe: dominicanRepublicSubscribe,
        ecuador_subscribe: ecuadorSubscribe,
        elsalvador_subscribe: elSalvadorSubscribe,
        guatemala_subscribe: guatemalaSubscribe,
        honduras_subscribe: hondurasSubscribe,
        mexico_subscribe: mexicoSubscribe,
        nicaragua_subscribe: nicaraguaSubscribe,
        panama_subscribe: panamaSubscribe,
        paraguay_subscribe: paraguaySubscribe,
        peru_subscribe: peruSubscribe,
        puertorico_subscribe: puertoRicoSubscribe,
        uruguay_subscribe: uruguaySubscribe,
        venezuela_subscribe: venezuelaSubscribe
        })
      .eq('id', user.id)}
      }
      
useEffect(() => {
  const fetchPreferences = async () => {
    if (user) {
    const { data, error } = await supabase
      .from('UserPreferences')
      .select('*')
      .eq('id', user.id);

      if (data)
{
setArgentinaSubscribe(data[0].argentina_subscribe);
      setBoliviaSubscribe(data[0].bolivia_subscribe);
      setChileSubscribe(data[0].chile_subscribe);
      setColombiaSubscribe(data[0].colombia_subscribe);
      setCostaRicaSubscribe(data[0].costarica_subscribe);
      setCubaSubscribe(data[0].cuba_subscribe);
      setDominicanRepublicSubscribe(data[0].dominicanrepublic_subscribe);
      setEcuadorSubscribe(data[0].ecuador_subscribe);
      setElSalvadorSubscribe(data[0].elsalvador_subscribe);
      setGuatemalaSubscribe(data[0].guatemala_subscribe);
      setHondurasSubscribe(data[0].honduras_subscribe);
      setMexicoSubscribe(data[0].mexico_subscribe);
      setNicaraguaSubscribe(data[0].nicaragua_subscribe);
      setPanamaSubscribe(data[0].panama_subscribe);
      setParaguaySubscribe(data[0].paraguay_subscribe);
      setPeruSubscribe(data[0].peru_subscribe);
      setPuertoRicoSubscribe(data[0].puertorico_subscribe);
      setUruguaySubscribe(data[0].uruguay_subscribe);
      setVenezuelaSubscribe(data[0].venezuela_subscribe);
    }
  }
  };

  fetchPreferences();
}, []);
  

    return (
      <div>
            <section class="app">
  <h1>Select <span class="blue-color">your favorite countries</span></h1>
  <h3 class="gray-color">Choose the countries you want to see the summaries for</h3>

<div className="section">

  <article>
    <input onChange={(event) => {
        setArgentinaSubscribe(event.target.checked);
      }} type="checkbox" checked={argentinaSubscribe} />
    <div>
      Argentina
    </div>
  </article>
  
  <article>
    <input onChange={(event) => {
        setBoliviaSubscribe(event.target.checked);
      }} type="checkbox" checked={boliviaSubscribe} />
    <div>
        Bolivia
    </div>
  </article>
  
  <article>
    <input onChange={(event) => {
        setChileSubscribe(event.target.checked);
      }} type="checkbox" checked={chileSubscribe} />
    <div>
        Chile
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setColombiaSubscribe(event.target.checked);
      }} type="checkbox" checked={colombiaSubscribe} />
    <div>
        Colombia
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setCostaRicaSubscribe(event.target.checked);
      }} type="checkbox" checked={costaRicaSubscribe} />
    <div>
        Costa Rica
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setCubaSubscribe(event.target.checked);
      }} type="checkbox" checked={cubaSubscribe} />
    <div>
  Cuba        
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setDominicanRepublicSubscribe(event.target.checked);
      }} type="checkbox" checked={dominicanRepublicSubscribe} />
    <div>
        Dominican Republic
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setEcuadorSubscribe(event.target.checked);
      }} type="checkbox" checked={ecuadorSubscribe} />
    <div>
        Ecuador
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setElSalvadorSubscribe(event.target.checked);
      }} type="checkbox" checked={elSalvadorSubscribe} />
    <div>
        El Salvador
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setGuatemalaSubscribe(event.target.checked);
      }} type="checkbox" checked={guatemalaSubscribe} />
    <div>
        Guatemala
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setHondurasSubscribe(event.target.checked);
      }} type="checkbox" checked={hondurasSubscribe} />
    <div>
        Honduras
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setMexicoSubscribe(event.target.checked);
      }} type="checkbox" checked={mexicoSubscribe} />
    <div>
        Mexico
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setNicaraguaSubscribe(event.target.checked);
      }} type="checkbox" checked={nicaraguaSubscribe} />
    <div>
        Nicaragua
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setPanamaSubscribe(event.target.checked);
      }} type="checkbox" checked={panamaSubscribe} />
    <div>
        Panama
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setParaguaySubscribe(event.target.checked);
      }} type="checkbox" checked={paraguaySubscribe} />
    <div>
        Paraguay
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setPeruSubscribe(event.target.checked);
      }} type="checkbox" checked={peruSubscribe} />
    <div>
        Peru
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setPuertoRicoSubscribe(event.target.checked);
      }} type="checkbox" checked={puertoRicoSubscribe} />
    <div>
        Puerto Rico
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setUruguaySubscribe(event.target.checked);
      }} type="checkbox" checked={uruguaySubscribe} />
    <div>
        Uruguay
    </div>
  </article>

  <article>
    <input onChange={(event) => {
        setVenezuelaSubscribe(event.target.checked);
      }} type="checkbox" checked={venezuelaSubscribe} />
    <div>
        Venezuela
    </div>
  </article>

  </div>

</section>

<section>

  <form onSubmit={submitPreferences()}>
  <a href="#" class="upgrade-btn" type="submit">Submit</a>
  </form>
</section>
</div>
      
    );
  }
  