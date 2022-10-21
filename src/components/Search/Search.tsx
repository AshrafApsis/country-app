import classes from "./Search.module.css";

const Search = () => {
  return (
    <>
      <section className={classes.searchmenu}>
        <section>
          <input placeholder="Search a country..." />
        </section>
        <section>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </section>
      </section>
    </>
  );
};

export default Search;
