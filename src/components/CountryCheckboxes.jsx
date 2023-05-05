
export default function CountryCheckboxes({setCountrySubscribe, countrySubscribe, countryName}) {

    return (
      <div>
 

  <article>
    <input onChange={(event) => {
        {setCountrySubscribe(event.target.checked)};
      }} type="checkbox" checked={countrySubscribe} />
    <div>
      {countryName}
    </div>
  </article>
  
  </div>
      
    );
  }
  