import { useEffect, useState } from "react";
import "./App.css";

import CountriesList from "./components/Country/CountriesList";

import Header from "./components/Header/header.component";
import Search from "./components/Search/Search";
import Container from "./core/Container";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [searchCountry, setsearchCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);



  useEffect(() => {
    getCountrieList();
  }, []);

  const [countriesList, setCountrieList] = useState<any[]>([]);

  const onHandleRegion = (region: string) => {
    // 👇️ take parameter passed from Child component
    setSelectedRegion(region);
    console.log("selectedRegion", selectedRegion);
    if(region.toLowerCase().includes("all")){
      getCountrieList();
    }else{
      getCountriesByRegion(region);
    }
  };

  const onSearchCountry = (userInput: string) => {
    // 👇️ take parameter passed from Child component
    setsearchCountry(userInput.toLowerCase());
    if (
      typeof userInput === "string" &&
      userInput.trim() !== "" &&
      userInput.length !== 0
    ) {
      setTimeout(() => searchByCountryName(userInput),500);
      console.log("searchCountry", searchCountry);
    } else {
      getCountrieList();
    }
  };

  const getCountriesByRegion = async (region: string) => {
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/region/${region}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((value) => {
        return value.json();
      });

      console.log(response);
      
      setCountrieList(response);
    } catch (error) {
      console.log(error);
    }
  };

  //

  const getCountrieList = async () => {
    try {
       setIsLoading(true); 

      let response = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((value) => {
        console.log(value.status);
       
          return value.json();
       
      });
      
      if (response !== null || response !== undefined) {
        if(response?.message !== undefined &&  response?.message !== ''){
          return;  
        }
        setCountrieList(response);
      }
      setIsLoading(false); 
    } catch (error) {
      setIsLoading(false); 
      console.log(error);
    }
  };

  const searchByCountryName = async (userInput: string) => {
    try {
      let response = await fetch(
        `https://restcountries.com/v3.1/name/${userInput}?fullText=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((value) => {
        console.log(value.status);
        if (value.status === 200) {
          return value.json();
        } else if (value.status >= 400 && value.status <= 499) {
          value.json().then((value) => {
            throw new Error(`${value.message}`);
          }).catch((e)=>{
            console.log(e.message);
          });
        } else if (value.status >= 500 && value.status <= 599) {
          value.json().then((value) => {
            throw new Error(`${value.message}`);
          }).catch((e)=>{
            console.log(e.message);
          });
        }
      });

      // console.log(`ERROR ${response}`);

      if (response !== null || response !== undefined) {
        console.log(response);
        setCountrieList(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Search
          selectRegion={onHandleRegion}
          searchCountry={onSearchCountry}
        ></Search>
       {
        isLoading === true ? <p>Loading ....</p>  :  <CountriesList countryArray={countriesList}></CountriesList>
       }
      </Container>
    </>
  );
}

export default App;
