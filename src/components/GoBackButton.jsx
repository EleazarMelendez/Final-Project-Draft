export default function GoBackButton() {

const country = "country"; // the country you're interested in

  return (
    <div>
      <div className="btn-cont">
        <a class="btn" href="#">
          You have selected {country}. Click here to select a different country.
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
      </div>
 </div>
  );
}
