import { useState } from "react";

import BarChart from "./BarChart";
import { ChartData } from "./ChartData";
import cardDetails from "../HomeComp/data";

function Test() {
  const [userData, setUserData] = useState({
    labels: cardDetails.map((data) => data.savingsType),
    datasets: [
      {
        label: "Statistics",
        data: cardDetails.map((data) => data.amount),
        backgroundColor: cardDetails.map((data) => data.backgroundColor),
        borderColor: "rgba(0, 0, 0, 0.1)",
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
