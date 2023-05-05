export default function GoBackButton({countryState, onBlankButtonClick}) {

const renderGoBackButton = () => {
  if (countryState === "") {
    return <div></div>
  } else { return <div className="main-container">
        <div className="goback-adjust">
        <div className="btn-cont">
        <a class="btn" href="#" onClick={onBlankButtonClick}>
          You have selected {countryState}. Click here to back to the introduction.
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
      </div>        </div> 
        </div> }
}

  return (
    <div>
      {renderGoBackButton()}
 </div>
  );
}
