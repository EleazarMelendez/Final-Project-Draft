import { useState, useEffect } from "react";

import { useSecurePage } from "@/lib/useSecurePage";
import { useAddUserToPreferencesTable } from "@/lib/useAddUserToPreferencesTable";

import { createClient } from "@supabase/supabase-js";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

import CountryCheckboxes from "@/components/CountryCheckboxes";
import Menu from "@/components/Menu"
import SpinningGlobe from "@/components/SpinningGlobe";
import SubmitButton from "@/components/SubmitButton";
import PersonalSummary from "@/components/PersonalSummary";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Dashboard = () => {

const user = useUser();

useSecurePage();
useAddUserToPreferencesTable();

const [topMenuOpen, setTopMenuOpen] = useState(true);

const toggleTopMenuOpen = () => {
  setTopMenuOpen(!topMenuOpen);
};

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

const supabaseClient = useSupabaseClient();

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
}, [user]);


  return (
    <div>
      <div>
  <Menu />
  <div className="btn-cont">
      <button className="btn"
        onClick={() => {
          supabaseClient.auth.signOut();
        }}>
        Log out of the PERSONALIZED NEWS dashboard
      </button> </div>
  
{topMenuOpen && (<div class="app slide">
      <div className="main-container">
      <SpinningGlobe /> 
      </div>  

    <div class="app">
  <h1>Select <span class="blue-color">your favorite countries</span></h1>
  <h3 class="gray-color">Choose the countries you want to see the summaries for</h3>

<div className="section">
  <CountryCheckboxes setCountrySubscribe={setArgentinaSubscribe} countrySubscribe={argentinaSubscribe} countryName="Argentina" />
  <CountryCheckboxes setCountrySubscribe={setBoliviaSubscribe} countrySubscribe={boliviaSubscribe} countryName="Bolivia" />
  <CountryCheckboxes setCountrySubscribe={setChileSubscribe} countrySubscribe={chileSubscribe} countryName="Chile" />
  <CountryCheckboxes setCountrySubscribe={setColombiaSubscribe} countrySubscribe={colombiaSubscribe} countryName="Colombia" />
  <CountryCheckboxes setCountrySubscribe={setCostaRicaSubscribe} countrySubscribe={costaRicaSubscribe} countryName="Costa Rica" />
  <CountryCheckboxes setCountrySubscribe={setCubaSubscribe} countrySubscribe={cubaSubscribe} countryName="Cuba" />
  <CountryCheckboxes setCountrySubscribe={setDominicanRepublicSubscribe} countrySubscribe={dominicanRepublicSubscribe} countryName="Dominican Republic" />
  <CountryCheckboxes setCountrySubscribe={setEcuadorSubscribe} countrySubscribe={ecuadorSubscribe} countryName="Ecuador" />
  <CountryCheckboxes setCountrySubscribe={setElSalvadorSubscribe} countrySubscribe={elSalvadorSubscribe} countryName="El Salvador" />
  <CountryCheckboxes setCountrySubscribe={setGuatemalaSubscribe} countrySubscribe={guatemalaSubscribe} countryName="Guatemala" />
  <CountryCheckboxes setCountrySubscribe={setHondurasSubscribe} countrySubscribe={hondurasSubscribe} countryName="Honduras" />
  <CountryCheckboxes setCountrySubscribe={setMexicoSubscribe} countrySubscribe={mexicoSubscribe} countryName="Mexico" />
  <CountryCheckboxes setCountrySubscribe={setNicaraguaSubscribe} countrySubscribe={nicaraguaSubscribe} countryName="Nicaragua" />
  <CountryCheckboxes setCountrySubscribe={setPanamaSubscribe} countrySubscribe={panamaSubscribe} countryName="Panama" />
  <CountryCheckboxes setCountrySubscribe={setParaguaySubscribe} countrySubscribe={paraguaySubscribe} countryName="Paraguay" />
  <CountryCheckboxes setCountrySubscribe={setPeruSubscribe} countrySubscribe={peruSubscribe} countryName="Peru" />
  <CountryCheckboxes setCountrySubscribe={setPuertoRicoSubscribe} countrySubscribe={puertoRicoSubscribe} countryName="Puerto Rico" />
  <CountryCheckboxes setCountrySubscribe={setUruguaySubscribe} countrySubscribe={uruguaySubscribe} countryName="Uruguay" />
  <CountryCheckboxes setCountrySubscribe={setVenezuelaSubscribe} countrySubscribe={venezuelaSubscribe} countryName="Venezuela" />
  </div>
  </div>
     
    <span onClick={toggleTopMenuOpen}>
    <SubmitButton argentinaSubscribe={argentinaSubscribe} boliviaSubscribe={boliviaSubscribe} chileSubscribe={chileSubscribe} colombiaSubscribe={colombiaSubscribe} costaRicaSubscribe={colombiaSubscribe} cubaSubscribe={cubaSubscribe} dominicanRepublicSubscribe={dominicanRepublicSubscribe} ecuadorSubscribe={ecuadorSubscribe} elSalvadorSubscribe={elSalvadorSubscribe} guatemalaSubscribe={guatemalaSubscribe} hondurasSubscribe={hondurasSubscribe} mexicoSubscribe={mexicoSubscribe} nicaraguaSubscribe={nicaraguaSubscribe} panamaSubscribe={panamaSubscribe} paraguaySubscribe={paraguaySubscribe} peruSubscribe={peruSubscribe} puertoRicoSubscribe={puertoRicoSubscribe} uruguaySubscribe={uruguaySubscribe} venezuelaSubscribe={venezuelaSubscribe} />
</span></div>)}

<div>
<div class="slide">
      <div>
  {!topMenuOpen && (
  <form onClick={toggleTopMenuOpen}>
  <a href="#" class="upgrade-btn" type="submit">Change preferred countries</a>
  </form>
)}
{argentinaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Argentina"/>)}
 {boliviaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Bolivia"/>)}
 {chileSubscribe && !topMenuOpen && (<PersonalSummary countryState="Chile"/>)}
 {colombiaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Colombia"/>)}
{costaRicaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Costa Rica"/>)}
{cubaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Cuba"/>)}
{dominicanRepublicSubscribe && !topMenuOpen && (<PersonalSummary countryState="Dominican Republic"/>)}
{ecuadorSubscribe && !topMenuOpen && (<PersonalSummary countryState="Ecuador"/>)}
{elSalvadorSubscribe && !topMenuOpen && (<PersonalSummary countryState="El Salvador"/>)}
{guatemalaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Guatemala"/>)}
{hondurasSubscribe && !topMenuOpen && (<PersonalSummary countryState="Honduras"/>)}
{mexicoSubscribe && !topMenuOpen && (<PersonalSummary countryState="Mexico"/>)}
{nicaraguaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Nicaragua"/>)}
{panamaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Panama"/>)}
{paraguaySubscribe && !topMenuOpen && (<PersonalSummary countryState="Paraguay"/>)}
{peruSubscribe && !topMenuOpen && (<PersonalSummary countryState="Peru"/>)}
{puertoRicoSubscribe && !topMenuOpen && (<PersonalSummary countryState="Puerto Rico"/>)}
{uruguaySubscribe && !topMenuOpen && (<PersonalSummary countryState="Uruguay"/>)}
{venezuelaSubscribe && !topMenuOpen && (<PersonalSummary countryState="Venezuela"/>)} 
</div></div></div>
    </div></div>
  );
};

export default Dashboard;