import React from "react";
import Chart from "react-google-charts";
import Spinner from "./Spinner";
import ownErrorMessage from "../scripts/ownErrorMessage";
import detailStyles from "../styles/Detail.module.css";
import loadStatusMessageStyles from "../styles/LoadStatusMessage.module.css";

const DetailDelayGraph = ({detailDelayGraph, detailDelayGraphMapped}) => {
  return (
    <>
        {detailDelayGraph && detailDelayGraph.isLoading === true ? (
          <div className={detailStyles.spinner_active}>
            <Spinner />
          </div>
        ) : detailDelayGraph && detailDelayGraph.error?.response ? (
          <h1>
            {document
              .getElementById(detailStyles.detail__delay__chart)
              ?.classList.remove(
                loadStatusMessageStyles.status__initial,
                loadStatusMessageStyles.status__up,
                loadStatusMessageStyles.status__down
              )}
            {document
              .getElementById(detailStyles.detail__delay__chart)
              ?.classList.add(loadStatusMessageStyles.status__error)}
            {ownErrorMessage(detailDelayGraph.error.response)}
          </h1>
        ) : detailDelayGraph && detailDelayGraph.response?.data ? (
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
