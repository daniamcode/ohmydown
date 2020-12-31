import React, { useEffect, useState } from "react";
import styles from "../../styles/Detail.module.css";
import Disqus from "disqus-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadDetailDelayGraph } from "../../redux/actions/detailActions";
import mapDetailDelayGraph from "../../scripts/mapDetailDelayGraph";
import DetailDelayGraph from '../../components/DetailDelayGraph';
import Countdown from 'react-countdown';
import { useRouter } from 'next/router';
import Layout from "../../components/Layout";

const Detail = (props) => {
  const router = useRouter();
  const { id } = router.query
  const token = useSelector((state) => state.googleReducer.authResponse?.token);
  const detailDelayGraph = useSelector(
    (state) => state.detailReducer.detailDelayGraph
  );
  let detailDelayGraphMapped = mapDetailDelayGraph(
    detailDelayGraph?.response?.data,
    id
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

  return (
    <Layout>
    <section className={styles.detail}>
      <h1 className={styles.detail__title}>
        Delay of {id} over time:
      </h1>
      <p>(New real-time data in <span> </span>
      <Countdown className={styles.detail__countdown} date={timer} daysInHours={true} overtime={true} />)</p>
      <div id={styles.detail_delay_chart} className={styles.detail__chart}>
        <DetailDelayGraph detailDelayGraph={detailDelayGraph} detailDelayGraphMapped={detailDelayGraphMapped} />
      </div>

      <p className={styles.detail__comments_title}>
        Is {id} down for you right now? You can submit your comments about their
        service status or report an issue below to let others know that they
        aren't alone with their issue, or give your opinion about anything
        related if you want.
      </p>
      <div className={styles.detail__comments}>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </section>
    </Layout>
  );
};

export default Detail;
