import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button/Button";
import Header from "../components/Common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs/Tabs";
import { get100Coins } from "../functions/get100Coins";
import { Link } from "react-router-dom";

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <TabsComponent coins={coins} />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <Link to="/dashboard">
                      <Button text={"dashboard"}
                      />
                 </Link>
          </div>
        </div>  
      )}
    </div>
  );
}

export default Watchlist;