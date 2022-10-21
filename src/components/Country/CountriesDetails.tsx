import classes from './Countries.module.css';

const CountriesDetails = ({imageUrl}:{imageUrl:string}) => {
  return (
    <>
      <div className={classes.card}>
        <div>
        <img src={imageUrl} alt="country flag" className={classes['country-image']}/>
        </div>
       <div className={classes['country-details']}>
       <div className={classes['country-name']}>
          <p>United States of America</p>
        </div>
        <div>
          <span>Population:</span>
          <span>323,947,000</span>
        </div>
        <div>
          <span>Regions:</span>
          <span>Americas</span>
        </div>
        <div>
          <span>Capital:</span>
          <span>Washington D.C</span>
        </div>
       </div>
      </div>
    </>
  );
};

export default CountriesDetails;
