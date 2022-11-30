import { useState } from "react";

import BarChart from "./BarChart";
import { ChartData } from "./ChartData";
import cardDetails from "../HomeComp/data.js";

function Test() {
  const [userData, setUserData] = useState({
    labels: cardDetails.map((data) => data.walletName),
    datasets: [
      {
        label: "Savings",
        data: cardDetails.map((data) => data.amount),
        backgroundColor: "#009daf",
        borderColor: "#009daf",
        borderWidth: 0.5,
        barPercentage: 0.8,
        borderRadius: 10,
        xAxisID: "Wallet",
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <>
      <div className="home-barchart">
        <BarChart chartData={userData} />
      </div>

      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </>
  );
}

export default Test;
