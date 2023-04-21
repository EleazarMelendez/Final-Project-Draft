export default function GoBackButton({countryState}) {

  return (
    <div>
      <div className="btn-cont">
        <a class="btn" href="#">
          You have selected {countryState}. Go back to the introduction.
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
      </div>
 </div>
  );
}
