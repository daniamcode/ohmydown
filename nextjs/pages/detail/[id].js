import React, { useEffect, useState } from "react";
import detailStyles from "../../styles/Detail.module.css";
import Disqus from "disqus-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadDetailDelayGraph } from "../../redux/actions/detailActions";
import mapDetailDelayGraph from "../../scripts/mapDetailDelayGraph";
import DetailDelayGraph from '../../components/DetailDelayGraph';
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';
import Layout from "../../components/Layout";
import { NextSeo } from 'next-seo';

const Detail = ({id}) => {
  // const router = useRouter();
  // const { id } = router.query
  const token = useSelector((state) => state.googleReducer.authResponse?.token);
  const detailDelayGraph = useSelector(
    (state) => state.detailReducer.detailDelayGraph
    );
  const url = detailDelayGraph?.response?.data && detailDelayGraph.response.data[0].url;
  let detailDelayGraphMapped = mapDetailDelayGraph(
    detailDelayGraph?.response?.data
  );
  let dispatch = useDispatch();
  let timer = Date.now() + 300000

  const disqusShortname = "caucana";
  const disqusConfig = {
    url: `http://localhost:3000/${id}`,
    identifier: `http://localhost:3000/${id}`,
    title: "Title",
  };

  useEffect(() => {
    dispatch(loadDetailDelayGraph(id, token));
    const interval = setInterval(() => {
      dispatch(loadDetailDelayGraph(id, token));
    }, 300000);

    return () => clearInterval(interval);
  }, [dispatch, id, token]);
  const title = `Is ${url} down?`
  const description = `Uptime and delay data and graphs of ${url} over time.`
  
  return (
     <>
     <NextSeo
      title={title}
      description={description}
    />
    <Layout>
    <main className={detailStyles.detail}>
      <h1 className={detailStyles.detail__title}>
        Delay of {url} over time:
      </h1>
      <p>(New real-time data in <span> </span>
      <Countdown className={detailStyles.detail__countdown} date={timer} daysInHours={true} overtime={true} />)</p>
      <div id={detailStyles.detail__delay_chart} className={detailStyles.detail__chart}>
        <DetailDelayGraph detailDelayGraph={detailDelayGraph} detailDelayGraphMapped={detailDelayGraphMapped} />
      </div>

      <p className={detailStyles.detail__comments_title}>
      Is {url} down for you right now? You can submit your comments about their
        service status or report an issue below to let others know that they
        aren't alone with their issue, or give your opinion about anything
        related if you want.
      </p>
      <div className={detailStyles.detail__comments}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </main>
    </Layout>
    </>
  );
};

export async function getServerSideProps({query}) {
  const { id } = query

  return {
    props: {
      id
    },
  };
}

export default Detail;
