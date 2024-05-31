import React, { useState } from "react";
import styles from "./List.module.css"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { convertNumber } from "../../../functions/convertNumber";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";
import { Link } from "react-router-dom";

function List({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.tr
        className={styles.listRow}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip title="Coin Image">
        <td className={styles.tdImg}>
        <img src={coin.image} 
         className=  {` ${styles.coinImage} ${styles.coinImageTd}`} 
        />
          </td> 
        </Tooltip> 
        <Tooltip title="Coin Info" placement="bottom-start"> 
           <td className={styles.tdInfo}>
         <div className={styles.infoFlex}> 
              <p className={`${styles.coinSymbol} ${styles.tdP}`}>{coin.symbol}</p>
              <p className={`${styles.coinName} ${styles.tdP}`}>{coin.name}</p>
             </div> 
          </td>
        </Tooltip>
        <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
        >
          {coin.price_change_percentage_24h >= 0 ? (
            <td>
            <div className={styles.chipFlex}>
                <div className={styles.priceChip}>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className={`${styles.chipIcon} ${styles.tdChipIcon}`}>
                  <TrendingUpRoundedIcon />
                </div>
              </div>
            </td>
          ) : (
            <td>
              <div className={styles.chipFlex}>
                <div className={styles.priceChipRed} >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className={`${styles.chipIconRed} ${styles.tdChipIcon}`}>
                  <TrendingDownRoundedIcon />
                </div>
              </div>
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
          {coin.price_change_percentage_24h >= 0 ? (
            <td className= {`${styles.currentPrice} ${styles.tdCurrentPrice}`}>
              ${coin.current_price.toLocaleString()}
            </td>
          ) : (
            <td className={`${styles.currentPriceRed} ${styles.tdCurrentPrice}`}>
              ${coin.current_price.toLocaleString()}
            </td>
          )}
        </Tooltip>
        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <td className={`${styles.tdTotalVolume} ${styles.coinName}`}>
            {coin.total_volume.toLocaleString()}
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className={`${styles.coinName} ${styles.tdMarketCap}`}>
            ${coin.market_cap.toLocaleString()}
          </td>
        </Tooltip>
        <td className={`${styles.coinName} ${styles.mobile}`}>${convertNumber(coin.market_cap)}</td>
        <td
          className={`${styles.watchlistIcon} ${
            coin.price_change_percentage_24h < 0 && styles.watchlistIconRed
          }`}
          onClick={(e) => {
            if (isCoinAdded) {
              // remove coin
              removeItemToWatchlist(e, coin.id, setIsCoinAdded);
            } else {
              setIsCoinAdded(true);
              saveItemToWatchlist(e, coin.id);
            }
          }}
        >
          {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
        </td>
      </motion.tr>
    </Link>
  );
}

export default List;