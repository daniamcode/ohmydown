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
  const id = props.match.params.url
  const detailDelayGraph = useSelector((state) => state.detailReducer.detailDelayGraph);
  let detailDelayGraphMapped = mapDetailDelayGraph(detailDelayGraph.response?.data, id)
  let dispatch = useDispatch();
  
  const disqusShortname = "caucana";
  const disqusConfig = {
    url: `http://localhost:3000/${id}`,
    identifier: `http://localhost:3000/${id}`,
    title: "Title",
  };

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
  chartType="LineChart"
  loader={<Spinner />}
  data={detailDelayGraphMapped}
  options={{
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Delay (ms)',
    },
  }}
  rootProps={{ 'data-testid': '1' }}
/>) : (<></>)}
</div>
      
      <p className="detail__comments-title">
        Is {id} down for you right now? You can submit your
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
