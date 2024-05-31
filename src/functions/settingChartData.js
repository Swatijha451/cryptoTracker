import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])),
      datasets: [
        {
          label: "Crypto 1",
          data: prices1.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
        
         borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto 2",
          data: prices2.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          borderColor: "#61c96f",         
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])),
      datasets: [
        {
          data: prices1?.map((data) => data[1]),
          borderWidth: 1,
          fill: true,
          backgroundColor: "#db8b5d1c",
          tension: 0.25,
          borderColor: "#e97a3a",
          pointRadius: 0,
        yAxisID: "crypto1",
        },
      ],
    });
  }
};