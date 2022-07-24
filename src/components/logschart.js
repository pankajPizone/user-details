import React from "react";
import { Line } from "@ant-design/charts";

const LogsChart = (props) => {
  return (
    <>
    {console.log(props.cData)}
      <Line
        data={props.cData}
        height={100}
        width={100}
        xField="time"
        yField="revenue"
        xAxis={false}
        yAxis={false}
        point={{ size: 0, shape: "diamon" }}
        color="green"
        label={false}
      />
    </>
  );
};

export default LogsChart;
