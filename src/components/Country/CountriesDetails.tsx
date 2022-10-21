import classes from "./Countries.module.css";

const CountriesDetails = ({ country }: { country:any }) => {
  return (
    <>
      <div className={classes.card}>
        <div>
          <img
            src={country.flags.png}
            alt="country flag"
            className={classes["country-image"]}
          />
        </div>
        <div className={classes["country-details"]}>
          <div className={classes["country-name"]}>
            <p>{country.name.official}</p>
          </div>
          <div>
            <span>Population:</span>
            <span>{country.population}</span>
          </div>
          <div>
            <span>Regions:</span>
            <span>{country.region}</span>
          </div>
          <div>
            <span>Capital:</span>
            <span>{country.capital}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountriesDetails;
