import CountriesDetails from "./CountriesDetails";
import classes from "./Countries.module.css";
import { useEffect ,useState} from "react";

type CountryProp = {
  countryArray: any[];
}

const CountriesList:React.FC<CountryProp> = ({countryArray}:CountryProp) => {

  // const [countriesList,setCountrieList] = useState<any[]>([]);

  // useEffect(()=>{
  //   // getCountrieList();
  //   setCountrieList(countryArray);
  // },[]);


//  const getCountrieList =  async () => {
//    let response =  await fetch("https://restcountries.com/v3.1/all",{method:"GET",  headers: {
//       'Content-Type': 'application/json'

//     },}).then((value)=>{
//       return value.json();
//     });

//     setCountrieList(response);
   
//  }


  let countries = countryArray?.map((country)=> <CountriesDetails country={country} key={country.name.common}></CountriesDetails>) ?? [];
  

  return (
    <div className={classes["country-container"]}>
      {
        countries
      }
    </div>
  );
};

export default CountriesList;
