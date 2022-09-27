import React, { Component } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SplineAreaChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "",
      },
      axisY: {
        title: "",
        includeZero: true,
        suffix: "",
      },
      data: [
        {
          type: "splineArea",
          xValueFormatString: "MM YYYY",
          yValueFormatString: "#,##0.##",
          showInLegend: true,
          legendText: "kWh = one kilowatt hour",
          dataPoints: [
            { x: new Date("2022- 01"), y: 84.927 },
            { x: new Date("2022- 02"), y: 82.609 },
            { x: new Date("2022- 03"), y: 81.428 },
            { x: new Date("2022- 04"), y: 83.259 },
            { x: new Date("2022- 05"), y: 83.153 },
            { x: new Date("2022- 06"), y: 84.18 },
            { x: new Date("2022- 07"), y: 84.84 },
            { x: new Date("2022- 08"), y: 82.671 },
            { x: new Date("2022- 09"), y: 87.496 },
            { x: new Date("2022- 10"), y: 86.007 },
            { x: new Date("2022- 11"), y: 87.233 },
            { x: new Date("2022- 12"), y: 86.276 },
          ],
        },
      ],
    };

    return (
      <div>
        {/* <h1>React Spline Area Chart</h1> */}
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default SplineAreaChart;
