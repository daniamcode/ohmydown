import React from "react";
import Chart from "react-google-charts";
import Spinner from "./Spinner";

const ProfileDelayGraph = ({ profileDelayGraphMapped }) => {
  return (
    <Chart
      height={"400px"}
      chartType="LineChart"
      loader={<Spinner />}
      data={profileDelayGraphMapped}
      options={{
        legend: { position: "top" },
        hAxis: {
          title: "Time",
        },
        vAxis: {
          title: "Delay (ms)",
        },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default ProfileDelayGraph;
