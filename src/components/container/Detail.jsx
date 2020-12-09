import React, { useEffect, useState } from "react";
import "../styles/Detail.css";
import Disqus from "disqus-react";
import Chart from "react-google-charts";
import Spinner from '../presentational/Spinner';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadDetailDelayGraph } from "../../redux/actions/detailActions";
import mapDetailDelayGraph from "../../scripts/mapDetailDelayGraph";
import ownErrorMessage from "../../scripts/ownErrorMessage";

const Detail = (props) => {
  const detailDelayGraph = useSelector((state) => state.detailReducer.detailDelayGraph);
  
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

  const id = props.match.params.url

  const disqusShortname = "caucana";
  const disqusConfig = {
    url: `http://localhost:3000/${id}`,
    identifier: `http://localhost:3000/${id}`,
    title: "Title",
  };
  let dispatch = useDispatch();
  console.log(detailDelayGraph)
  // console.log(detailDelayGraph.response?.data[0].delay)
  let detailDelayGraphMapped = mapDetailDelayGraph(detailDelayGraph.response?.data)
  console.log(detailDelayGraphMapped)

  useEffect(() => {
    dispatch(loadDetailDelayGraph(id));
    const interval = setInterval(()=>{
      dispatch(loadDetailDelayGraph(id));
    },300000)
    
    return()=>clearInterval(interval)
    
  }, [dispatch, id]);

  return (
    <section className="detail">
      <h1 className="detail__title">
        Delay of {props.match.params.url} over time:
      </h1>
      <div id="detail-delay-chart" className="detail__chart">
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
      <Chart
  width={'600px'}
  height={'400px'}
  chartType="LineChart"
  loader={<Spinner />}
  data={[
    ['x', `${id}`],
    [detailDelayGraph?.response?.data[0].time, detailDelayGraph?.response?.data[0].delay],
    [detailDelayGraph?.response?.data[1].time, detailDelayGraph?.response?.data[1].delay],
    [detailDelayGraph?.response?.data[2].time, detailDelayGraph?.response?.data[2].delay],
    [detailDelayGraph?.response?.data[3].time, detailDelayGraph?.response?.data[3].delay],
    [detailDelayGraph?.response?.data[4].time, detailDelayGraph?.response?.data[4].delay],
    [detailDelayGraph?.response?.data[5].time, detailDelayGraph?.response?.data[5].delay],
    [detailDelayGraph?.response?.data[6].time, detailDelayGraph?.response?.data[6].delay],
    [detailDelayGraph?.response?.data[7].time, detailDelayGraph?.response?.data[7].delay],
    [detailDelayGraph?.response?.data[8].time, detailDelayGraph?.response?.data[8].delay],
    [detailDelayGraph?.response?.data[9].time, detailDelayGraph?.response?.data[9].delay],
  ]}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Delay',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>) : (<></>)}
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
