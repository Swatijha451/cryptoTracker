import React from "react";
import { useEffect, useState } from "react";
import styles from "./Header.module.css"
import TempDrawer from "./TempDrawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";

const Header =()=>{
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") == "dark" ? true : false
      );
    
      useEffect(() => {
        if (localStorage.getItem("theme") == "dark") {
          setDark();
        } else {
          setLight();
        }
      }, []);
    
      const changeMode = () => {
        if (localStorage.getItem("theme") != "dark") {
          setDark();
        } else {
          setLight();
        }
        setDarkMode(!darkMode);
        toast.success("Theme Changed!");
      };
    
      const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      };
    
      const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      };
    
    return(
        <div className={styles.header}>
            <h1 className={styles.logo}>
                CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
            </h1>
            <div className={styles.links}>
            <Switch checked={darkMode} onClick={() => changeMode()} />
                <Link to="/">
                    <p className={styles.link}>Home</p>
                </Link>
                <Link to="/compare">
                    <p className={styles.link}>Compare</p>
                </Link>
                <Link to="/watchlist">
                    <p className={styles.link}>Watchlist</p>
                </Link>
                <Link to="/dashboard">
                      <Button text={"dashboard"}
                      />
                 </Link>    
            </div>
            <div className={styles.drawercomponent}>
               <TempDrawer />
               <Switch checked={darkMode} onClick={() => changeMode()} />
              </div>

        </div>
    )
}
export default Header;