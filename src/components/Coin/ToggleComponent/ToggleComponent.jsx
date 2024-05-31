
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./ToggleComponent.module.css"

export default function ToggleComponent({ priceType, handlePriceTypeChange }) {
  return (
    <div className={styles.toggleDiv} >
      <ToggleButtonGroup
        value={priceType}
        exclusive onChange={  handlePriceTypeChange }
        sx={{
            "&.Mui-selected": {
              color: "var(--blue) !important",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid var(--blue)!important",
              borderColor: "unset",
              color: "var(--blue) !important ",
            },
            "& .MuiToggleButton-standard": {
              color: "var(--blue) !important",
            },
        }}
      >
        <ToggleButton value="prices" className={styles.toggleBtn}>Prices</ToggleButton>
        <ToggleButton value="market_caps" className={styles.toggleBtn}>Market Cap</ToggleButton>
        <ToggleButton value="total_volumes" className={styles.toggleBtn}>Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}