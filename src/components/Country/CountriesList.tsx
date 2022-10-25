import CountriesDetails from "./CountriesDetails";
import classes from "./Countries.module.css";


type CountryProp = {
  countryArray?: any[];
}

const CountriesList:React.FC<CountryProp> = ({countryArray}:CountryProp) => {


  let countries = countryArray?.map((country,index)=> <CountriesDetails country={country} key={country.capital + index}></CountriesDetails>) ?? [];
  

  return (
    <div className={classes["country-container"]}>
      {
        countries
      }
    </div>
  );
};

export default CountriesList;
