import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import styles from "./ComparePage.module.css";
import SelectDays from "../Coin/SelectDays/SelectDays";


function ComparePage({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  const style = {
    height: "2rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
      borderRadius:"1rem"

    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#e97a3a",
      },
    },
  };
  

  return (
    <div className={styles.selectCoinDiv}>
    
      <div className={styles.selectFlex}>
        <p>Crypto 1</p>
        <Select
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          sx={style}
        >
          {allCoins
            .filter((coin) => coin.id != crypto2)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className={styles.selectFlex}>
        <p>Crypto 2</p>
        <Select
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          sx={style}
        >
          {allCoins
            .filter((coin) => coin.id != crypto1)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <SelectDays
    days={days}
    handleDaysChange={handleDaysChange}
    noPTag={true}
  />
      
    </div>
  );
}

export default ComparePage;