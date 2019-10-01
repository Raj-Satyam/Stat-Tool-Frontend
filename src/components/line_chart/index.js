import { ResponsiveBump } from "@nivo/bump";
import React from "react";
import { mydata } from "../graphdata";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


export default function LineChart() {
    return(
      <div style={styles}>
        <div
          className="Bumpgraph"
          style={{ height: 600 }}
        >
          <ResponsiveBump
            data={mydata}
            margin={{ top: 40, right: 120, bottom: 40, left: 60 }}
            colors={{ scheme: "dark2" }}
            lineWidth={2}
            activeLineWidth={3}
            inactiveLineWidth={1}
            inactiveOpacity={0.15}
            pointSize={4}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: "background" }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: "serie.color" }}
            endLabelPadding={10}
            axisTop={
              null
              //{
              //tickSize: 5,
              //tickPadding: 5,
              //tickRotation: 0,
              //legend: '',
              //legendPosition: 'middle',
              //legendOffset: -36*
              //}
            }
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "ranking",
              legendPosition: "middle",
              legendOffset: -40
            }}
          />
        </div>
      </div>
    )
}