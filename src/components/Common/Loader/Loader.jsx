import React from "react";
import styles from "./Loader.module.css";
import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className={styles.loaderBackground}>
      <CircularProgress />
    </div>
  );
}

export default Loader;