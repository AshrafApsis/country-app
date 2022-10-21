import { useEffect, useState } from "react";
import "./App.css";

import CountriesList from "./components/Country/CountriesList";

import Header from "./components/Header/header.component";
import Search from "./components/Search/Search";
import Container from "./core/Container";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string>("");

 


  useEffect(()=>{
    getCountrieList();
  },[]);

  const [countriesList, setCountrieList] = useState<any[]>([]);

  const onHandleRegion = (region: string) => {
    // 👇️ take parameter passed from Child component
    setSelectedRegion(region);
    console.log(region);
    getCountriesByRegion(region);
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



  const getCountrieList =  async () => {
   try {
	 let response =  await fetch("https://restcountries.com/v3.1/all",{method:"GET",  headers: {
	       'Content-Type': 'application/json'
	 
	     },}).then((value)=>{
	       return value.json();
	     });
	 
	     setCountrieList(response);
} catch (error) {
	console.log(error);
}
    
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Search selectRegion={onHandleRegion}></Search>
        <CountriesList countryArray={countriesList}></CountriesList>
      </Container>
    </>
  );
}

export default App;
