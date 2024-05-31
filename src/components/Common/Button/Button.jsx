import React from "react";
import styles from "./Button.module.css";

const Button =({ text, outlined })=>{
    return(
         <div
      className={outlined ? `${styles.btnOutlined}` : `${styles.btn}`}
      
    >
      {text}
    </div>
    )
}
export default Button;