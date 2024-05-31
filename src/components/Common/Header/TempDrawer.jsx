import React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import styles from "./TempDrawer.module.css";
import { Link } from "react-router-dom";


const TempDrawer =()=>{
    const [open, setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className={styles.link} />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className={styles.drawerdiv}>
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
            <p className={styles.link}>Dashboard</p>
          </Link>
        </div>
        </Drawer>
        </div>
    )
}

export default TempDrawer;