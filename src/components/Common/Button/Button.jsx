import React from "react";
import styles from "./Button.module.css";

const Button =({ text, onClick, outlined })=>{
    return(
         <div
      className={outlined ? `${styles.btnOutlined}` : `${styles.btn}`}
      onClick={() => onClick()}
    >
      {text}
    </div>
    )
}
export default Button;