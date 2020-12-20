import React from "react";
import Chart from "react-google-charts";
import Spinner from "./Spinner";
import ownErrorMessage from "../../scripts/ownErrorMessage";

const ProfileDelayGraph = ({rawRows, profileDelayGraphMapped}) => {
  return (
    <>
        {/* {detailDelayGraph.isLoading === true ? (
          <div className="spinner-active">
            <Spinner />
          </div>
        ) : detailDelayGraph.error?.response ? (
          <h1>
            {document
              .getElementById("detail-delay-chart")
              ?.classList.remove(
                "status__initial",
                "status__up",
                "status__down"
              )}
            {document
              .getElementById("detail-delay-chart")
              ?.classList.add("status__error")}
            {ownErrorMessage(detailDelayGraph.error.response)}
          </h1>
        ) : detailDelayGraph.response?.data ? ( */}
          <Chart
            height={"400px"}
            chartType="LineChart"
            loader={<Spinner />}
            data={profileDelayGraphMapped}
            options={{
              legend: { position: 'top' },
              hAxis: {
                title: "Time",
              },
              vAxis: {
                title: "Delay (ms)",
              },
            }}
            rootProps={{ "data-testid": "1" }}
          />
        ) : (
          <></>
        {/* )} */}
      </>
  )
}

export default ProfileDelayGraph;
