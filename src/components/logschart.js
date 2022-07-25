import React from "react";
import { Line } from "@ant-design/charts";

const LogsChart = (props) => {
  let sort = (array)=>{
   return array.sort((a,b)=>{
      if ( a.time < b.time ){
        return -1;
      }
      if ( a.time > b.time ){
        return 1;
      }
      return 0;
    })
  }
  return (
    <>
    {console.log(props.cData)}
      <Line
        data={sort(props.cData)}
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
