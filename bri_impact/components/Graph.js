import React from "react";

import { XAxis, YAxis, LineChart, Line, Label } from "recharts";

const x = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

const y = [
  16378.04414961681, 15822.35326634955, 13482.815330000001, 12635.055375168216,
  12175.6238356, 12046.36519, 11016.127769698753, 9796.516249999997,
  9748.48874974,
];

const y2 = [
  33677.619839257284, 38135.854696820315, 42929.977915895506, 43732.79373573,
  48609.900710539994, 49145.38595999999, 47006.874165225454, 44111.16402215027,
  44291.49067139356,
];
const Graph = (props) => {
  const data = x.map((xItem, i) => {
    return {
      x: xItem,
      y: y[i],
    };
  });
  const data2 = x.map((xItem, i) => {
    return {
      x: xItem,
      y2: y2[i],
    };
  });
  return (
    <div>
      <h4>Debt to China</h4>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="x" />
        <YAxis
          label={{
            value: "Million USD",
            angle: -90,
            position: "insideLeft",
            fill: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Line type="linear" dataKey="y" stroke="#82ca9d" />
      </LineChart>
      <br></br>
      <br></br>
      <h4>Debt to Netherlands</h4>
      <LineChart width={500} height={300} data={data2}>
        <XAxis dataKey="x" />
        <YAxis
          label={{
            value: "Million USD",
            angle: -90,
            position: "insideLeft",
            fill: "rgba(255, 255, 255, 0.3)",
          }}
        />
        <Line type="linear" dataKey="y2" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Graph;
