import classes from "./Search.module.css";

type SearchProps = {
  selectRegion: (region: string) => void;
  searchCountry: (query:string) => void;
}


const Search: React.FC<SearchProps> = ({selectRegion,searchCountry}: SearchProps) => {
  
  
  let region: string[] = ["All Regions" ,"Africa", "Americas", "Asia", "Europe", "Oceania"];


 

  const onRegionChange  = (e:React.ChangeEvent<HTMLSelectElement>)=> {
    selectRegion(e.target.value);
  }

  const onCountrySearch = (e:React.ChangeEvent<HTMLInputElement>)=> {
    searchCountry(e.target.value);
  }

  return (
    <>
      <section className={classes.searchmenu}>
        <section>
          <input placeholder="Search a country..."  onChange={onCountrySearch} />
        </section>
        <section>
          <select  onChange={onRegionChange}>
         
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
