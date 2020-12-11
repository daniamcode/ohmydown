import React from "react";
import Chart from "react-google-charts";
import Spinner from "./Spinner";
import ownErrorMessage from "../../scripts/ownErrorMessage";

const DetailDelayGraph = ({detailDelayGraph, detailDelayGraphMapped}) => {
  return (
    <>
        {detailDelayGraph.isLoading === true ? (
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
        ) : detailDelayGraph.response?.data ? (
        <>
        <h3>Showing data until {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric'})} (London Time)</h3>
          <Chart
            height={"400px"}
            width={"100%"}
            chartType="LineChart"
            loader={<Spinner />}
            data={detailDelayGraphMapped}
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
          </>
        ) : (
          <></>
        )}
      </>
  )}

export default DetailDelayGraph;
