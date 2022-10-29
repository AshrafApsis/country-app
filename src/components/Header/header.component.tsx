// import classes from     "./header.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Header: React.FC = () => {
  return (
    <>
      {/* <nav className={classes.nav}>
               <div className={classes.navleft}>Where in the world?</div>
                <div className={classes.navright}>
                <FontAwesomeIcon  size="xl" icon={faMoon}  />
                 
                  </div>
               </nav> */}
      <AppBar
        position="static"
        color="primary"
        style={{ background: "#FFFFFF" }}
        elevation={1}
      >
        <Toolbar>
          <Typography
            
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#212121",fontWeight:'600' }}
          >
            Where in the world?
          </Typography>
          <IconButton onClick={() => console.log("Dark Mode !!!")}>
            <DarkModeOutlinedIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
