import React from "react";
import Chart from "react-google-charts";
import Spinner from "./Spinner";
import ownErrorMessage from "../../scripts/ownErrorMessage";

const ProfileDelayGraph = () => {
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
            data={[
              ['x', 'google.com', 'yavendras.com', 'sport.es'],
              [1, 34, 23, 15],
              [2, 134, 27, 95],
              [3, 65, 35, 37],
              [4, 74, 17, 34],
              [5, 121, 12, 82],
              [6, 90, 65, 37],
              [7, 92, 5, 165],
              [8, 120, 131, 65],
              [9, 3, 39, 67],
              [10, 66, 66, 65],
            ]}
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
