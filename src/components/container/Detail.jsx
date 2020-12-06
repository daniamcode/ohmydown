import React, { useEffect, useState } from "react";
import "../styles/Detail.css";
import Disqus from "disqus-react";
import Chart from "react-google-charts";
import Spinner from '../presentational/Spinner'

const Detail = (props) => {
  const chartData = [
    ['Date', 'Value'],
    [new Date(2006, 1, 1), 2000 * Math.random()],
    [new Date(2006, 7, 1), 2000 * Math.random()],
    [new Date(2007, 1, 1), 2000 * Math.random()],
    [new Date(2007, 7, 1), 2000 * Math.random()],
    [new Date(2008, 1, 1), 2000 * Math.random()],
    [new Date(2008, 7, 1), 2000 * Math.random()],
    [new Date(2009, 1, 1), 2000 * Math.random()],
    [new Date(2009, 7, 1), 2000 * Math.random()],
    [new Date(2010, 1, 1), 2000 * Math.random()],
    [new Date(2010, 7, 1), 2000 * Math.random()],
    [new Date(2011, 1, 1), 2000 * Math.random()],
    [new Date(2011, 7, 1), 2000 * Math.random()],
    [new Date(2012, 1, 1), 2000 * Math.random()],
    [new Date(2012, 7, 1), 2000 * Math.random()],
    [new Date(2013, 1, 1), 2000 * Math.random()],
    [new Date(2013, 7, 1), 2000 * Math.random()],
    [new Date(2014, 1, 1), 2000 * Math.random()],
    [new Date(2014, 7, 1), 2000 * Math.random()],
    [new Date(2015, 1, 1), 2000 * Math.random()],
    [new Date(2015, 7, 1), 2000 * Math.random()],
    [new Date(2016, 1, 1), 2000 * Math.random()],
    [new Date(2016, 7, 1), 2000 * Math.random()],
    [new Date(2017, 1, 1), 2000 * Math.random()],
    [new Date(2017, 7, 1), 2000 * Math.random()],
    [new Date(2018, 1, 1), 2000 * Math.random()],
    [new Date(2018, 7, 1), 2000 * Math.random()],
    [new Date(2019, 1, 1), 2000 * Math.random()],
    [new Date(2019, 7, 1), 2000 * Math.random()],
    [new Date(2020, 1, 1), 2000 * Math.random()],
    [new Date(2020, 7, 1), 2000 * Math.random()],
    [new Date(2021, 1, 1), 2000 * Math.random()],
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
