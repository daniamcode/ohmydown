import React, { useEffect, useState } from "react";
import "../styles/Detail.css";
import Disqus from "disqus-react";
import Chart from "react-google-charts";
import Spinner from '../presentational/Spinner'

const Detail = (props) => {
  const chartData = [
    ['Date', 'Value'],
    [new Date(1996, 1, 1), 2000 * Math.random()],
    [new Date(1996, 7, 1), 2000 * Math.random()],
    [new Date(1997, 1, 1), 2000 * Math.random()],
    [new Date(1997, 7, 1), 2000 * Math.random()],
    [new Date(1998, 1, 1), 2000 * Math.random()],
    [new Date(1998, 7, 1), 2000 * Math.random()],
    [new Date(1999, 1, 1), 2000 * Math.random()],
    [new Date(1999, 7, 1), 2000 * Math.random()],
    [new Date(2000, 1, 1), 2000 * Math.random()],
    [new Date(2000, 7, 1), 2000 * Math.random()],
    [new Date(2001, 1, 1), 2000 * Math.random()],
    [new Date(2001, 7, 1), 2000 * Math.random()],
    [new Date(2002, 1, 1), 2000 * Math.random()],
    [new Date(2002, 7, 1), 2000 * Math.random()],
    [new Date(2003, 1, 1), 2000 * Math.random()],
    [new Date(2003, 7, 1), 2000 * Math.random()],
    [new Date(2004, 1, 1), 2000 * Math.random()],
    [new Date(2004, 7, 1), 2000 * Math.random()],
    [new Date(2005, 1, 1), 2000 * Math.random()],
    [new Date(2005, 7, 1), 2000 * Math.random()],
    [new Date(2016, 1, 1), 2000 * Math.random()],
    [new Date(2016, 7, 1), 2000 * Math.random()],
    [new Date(2017, 1, 1), 2000 * Math.random()],
    [new Date(2017, 7, 1), 2000 * Math.random()],
    [new Date(2018, 1, 1), 2000 * Math.random()],
    [new Date(2018, 7, 1), 2000 * Math.random()],
    [new Date(2019, 1, 1), 2000 * Math.random()],
    [new Date(2021, 7, 1), 2000 * Math.random()],
  ]

  const disqusShortname = "caucana";
  const disqusConfig = {
    url: `http://localhost:3000/${props.match.params.url}`,
    identifier: `http://localhost:3000/${props.match.params.url}`,
    title: "Title",
  };

  return (
    <section className="detail">
      <h1 className="detail__title">
        Delay of {props.match.params.url} over time:
      </h1>
      <div className="detail__chart">
      <Chart 
  width={'100%'}
  chartType="LineChart"
  loader={<Spinner />}
  data={chartData}
  options={{
    // Use the same chart area width as the control for axis alignment.
    chartArea: { height: '75%', width: '80%' },
    hAxis: { slantedText: false },
    vAxis: { viewWindow: { min: 0, max: 2000 } },
    legend: { position: 'none' },
  }}
  rootProps={{ 'data-testid': '3' }}
  chartPackages={['corechart', 'controls']}
  controls={[
    {
      controlType: 'ChartRangeFilter',
      options: {
        filterColumnIndex: 0,
        ui: {
          chartType: 'LineChart',
          chartOptions: {
            chartArea: { width: '100%', height: '70%' },
            hAxis: { baselineColor: 'none' },
          },
        },
      },
      controlPosition: 'bottom',
      controlWrapperParams: {
        state: {
          range: { start: new Date(2018, 1, 9), end: new Date() },
        },
      },
    },
  ]}
/>
</div>
      
      <p className="detail__comments-title">
        Is {props.match.params.url} down for you right now? You can submit your
        comments about their service status or report an issue below to let
        others know that they aren't alone with their issue, or give your
        opinion about anything related if you want.
      </p>
      <div className="detail__comments">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </section>
  );
};

export default Detail;
