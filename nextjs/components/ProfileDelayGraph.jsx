import React from "react";
import Chart from "react-google-charts";
import Spinner from "./Spinner";
import profileStyles from "../styles/Profile.module.css";

const ProfileDelayGraph = ({ profileDelayGraphMapped }) => {
  return (
    <main className={profileStyles.profileDelayGraph}>
      <h3>
        Showing data until{" "}
        {new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        (London Time)
      </h3>
      <div className={profileStyles.profile__chart_container}>
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
      </div>
    </main>
  );
};

export default ProfileDelayGraph;
