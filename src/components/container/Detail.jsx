import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import * as Zoom from 'chartjs-plugin-zoom';
import Hammer from "hammerjs";
import "../styles/Detail.css";
import Disqus from "disqus-react";

const Detail = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
      datasets: [
        {
          label: "Delay",
          data: [98, 134, 213, 99, 89, 740, 254, 123, 677, 67, 98, 134, 213, 99, 89, 740, 254, 123, 677, 67, 98, 134, 213, 99, 89, 740, 254, 123, 677, 67],
          backgroundColor: ["rgba(75, 192, 192, 0.6"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

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
        <Line data={chartData} 
        options={{
          responsive: true,
          title: { text: "THICCNESS SCALE", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 100,
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          pan: {
            enabled: true,
            mode: "x",
            speed: 10,
            threshold: 0.1,
          },
          zoom: {
            enabled: true,
            drag: true,
            mode: "x",
            limits: {
              max: 10000,
              min: 1,
            },
            rangeMin: {
              x: 1,
              y: 1
            },
            rangeMax: {
              x: 10000,
              y: 10000
            },
          },
        }}
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
