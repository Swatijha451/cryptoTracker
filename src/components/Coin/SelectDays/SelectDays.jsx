import { MenuItem, Select } from "@mui/material";
import styles from './SelectDays.module.css'

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className={styles.selectDays} style={{ marginBottom: noPTag && "0" }}>
      {!noPTag && <p>Price change in </p>}
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={{
          height: "2rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
            borderRadius:"2rem"
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
            //  backgroundColor: "var(--blue)",
              color: "var(--white)",
              borderColor: "var(--blue)",
              
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;