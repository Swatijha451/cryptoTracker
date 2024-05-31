import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Coin/Info/Info";
import LineChart from "../components/Coin/LineChart/LineChart";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import ToggleComponents from "../components/Coin/ToggleComponent/ToggleComponent";
import Button from "../components/Common/Button/Button";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import List from "../components/Dashboard/List/List";
import { getCoinData } from "../functions/getCoinData";
import { getPrices } from "../functions/getPrices";
import { settingChartData } from "../functions/settingChartData";
import { settingCoinObject } from "../functions/settingCoinObject";

function Coin() {
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    setLoading(true);
    let coinData = await getCoinData(id, setError);
    // console.log("Coin DATA>>>>", coinData);
    settingCoinObject(coinData, setCoin);
    
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
    
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
    setDays(event.target.value);
  };

  const handlePriceTypeChange = async (event,newPriceType) => {
    setLoading(true);
    setPriceType(newPriceType);
    const prices = await getPrices(id, days,newPriceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
      console.log(newPriceType);
    }
    
  };

  return (
    <>
      <Header />
       {!error && !loading && coin.id ? ( 
        <>
          <div className="grey-wrapper">
            <List coin={coin} delay={0.5}  />
          </div>
          <div className="grey-wrapper">
            <SelectDays handleDaysChange={handleDaysChange} days={days} />
            <ToggleComponents
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData}  priceType={priceType} multiAxis={false} />
          </div>
          <Info title={coin.name} desc={coin.desc} />
        </>
      ) : error ? (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, Couldn't find the coin you're looking for 😞
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      ) : (<Loader /> ) 
       } 
    </>
  );
}

export default Coin;