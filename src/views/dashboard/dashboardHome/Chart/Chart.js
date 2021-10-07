import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 16500 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
];

const Chart = () => {
  return (
    <div>
      <VictoryChart domainPadding={20} height={300} width={600} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
          tickFormat={[
            "Quarter 1",
            "Quarter 2",
            "Quarter 3",
            "Quarter 4",
            "Quarter 5",
            "Quarter 6",
            "Quarter 7",
            "Quarter 8",
          ]}
        />
        <VictoryAxis dependentAxis 
        tickFormat={(x) => `$${x / 1000}k`} 
        />
        <VictoryStack colorScale={"warm"} style={{
        data: { width: 10 },
        labels: { padding: -20 }
      }} >
          <VictoryBar data={data2012} 
          x='quarter' y='earnings'
           />
          <VictoryBar data={data2013} 
          x='quarter' y='earnings'
           />
          <VictoryBar data={data2014} 
          x='quarter' y='earnings'
           />
          <VictoryBar data={data2015} 
          x='quarter' y='earnings'
           />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default Chart;
