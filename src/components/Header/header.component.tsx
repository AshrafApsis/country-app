import classes from     "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-regular-svg-icons';




const Header : React.FC = ()=>{
      return (
            <>
               <nav className={classes.nav}>
               <div className={classes.navleft}>Where in the world?</div>
                <div className={classes.navright}>
                <FontAwesomeIcon  size="xl" icon={faMoon}  />
                 {/* <span style={{padding:'12px'}}>Dark Mode</span> */}
                  </div>
               </nav>
            </>
      ); 
}



export default Header;