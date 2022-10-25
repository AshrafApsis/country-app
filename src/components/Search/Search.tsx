import classes from "./Search.module.css";

type SearchProps = {
  selectRegion: (region: string) => void;
  searchCountry: (query:string) => void;
}


const Search: React.FC<SearchProps> = ({selectRegion,searchCountry}: SearchProps) => {
  
  
  let region: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];


  const searchCountryByName = (text:string) =>{
      searchCountry(text);
      console.log(text);
  }

  return (
    <>
      <section className={classes.searchmenu}>
        <section>
          <input placeholder="Search a country..."  onChange={e=> searchCountryByName(e.target.value)} />
        </section>
        <section>
          <select  onChange={(e) => selectRegion(e.target.value)}>
          <option disabled selected> Regions </option>
            {region.map((e) => (
              <option value={e} key={e}>{e}</option>
            ))}
          </select>
        </section>
      </section>
    </>
  );
};

export default Search;
