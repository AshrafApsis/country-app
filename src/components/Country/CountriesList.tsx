import CountriesDetails from "./CountriesDetails";
import classes from "./Countries.module.css";

const CountriesList = () => {
  let countries:string[] = [
    "https://flagcdn.com/w320/lk.png",
    "https://flagcdn.com/w320/bg.png",
    "https://flagcdn.com/w320/fk.png",
    "https://flagcdn.com/w320/in.png",
    "https://flagcdn.com/w320/lk.png",
    "https://flagcdn.com/w320/bg.png",
    "https://flagcdn.com/w320/fk.png",
    "https://flagcdn.com/w320/in.png",
    "https://flagcdn.com/w320/lk.png",
    "https://flagcdn.com/w320/bg.png",
    "https://flagcdn.com/w320/fk.png",
    "https://flagcdn.com/w320/in.png",
  
  ];

  return (
    <div className={classes["country-container"]}>
      {countries.map((country) => (
        <CountriesDetails imageUrl={country} key={country}></CountriesDetails>
      ))}
    </div>
  );
};

export default CountriesList;
