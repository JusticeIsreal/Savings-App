import { useState } from "react";

import BarChart from "./BarChart";
import { ChartData } from "./ChartData";
import cardDetails from "./data";

function Test() {
  const [userData, setUserData] = useState({
    labels: cardDetails.map((data) => data.savingsType),
    datasets: [
      {
        label: "Statistics",
        data: cardDetails.map((data) => data.amount),
        backgroundColor: cardDetails.map((data) => data.backgroundColor),
        borderColor: "black",
        borderWidth: 0.3,
        barPercentage: 1,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 500 }}>
        <BarChart chartData={userData} />
      </div>
      {/* <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div> */}
    </div>
  );
}

export default Test;
