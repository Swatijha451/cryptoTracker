import React, { useState } from "react";
import styles from "./Grid.module.css"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../functions/removeItemToWatchlist";
import { Link } from "react-router-dom";


function Grid({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
    className={`${styles.grid} ${coin.price_change_percentage_24h < 0 && styles.gridRed}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
<div className={styles.imgFlex}>
          <img src={coin.image} className={styles.coinImage} />
          <div className={styles.iconFlex}>
            <div className={styles.infoFlex}>
              <p className={styles.coinSymbol}>{coin.symbol}</p>
              <p className={styles.coinName}>{coin.name}</p>
            </div>
            <div
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
            </div>
          </div>
        </div>
        {coin.price_change_percentage_24h >= 0 ? (
          <div className={styles.chipFlex}>
        <div className={styles.priceChip}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className={styles.chipIcon}>
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className={styles.chipFlex}>
            <div className={styles.priceChipRed}>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className={styles.chipIconRed}>
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        {coin.price_change_percentage_24h >= 0 ? (
          <p className={styles.currentPrice}>
            ${coin.current_price.toLocaleString()}
          </p>
        ) : (
          <p className={styles.currentPriceRed}>
            ${coin.current_price.toLocaleString()}
          </p>
        )}
        <p className={styles.coinName}>
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className={styles.coinName}>
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>
      </motion.div>
    </Link>
  );
}

export default Grid;