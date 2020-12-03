import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "../styles/Detail.css";
import Disqus from "disqus-react";

const Detail = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      plugins: {
        zoom: {
          // Container for pan options
          pan: {
            // Boolean to enable panning
            enabled: true,
      
            // Panning directions. Remove the appropriate direction to disable
            // Eg. 'y' would only allow panning in the y direction
            // A function that is called as the user is panning and returns the
            // available directions can also be used:
            //   mode: function({ chart }) {
            //     return 'xy';
            //   },
            mode: 'xy',
      
            rangeMin: {
              // Format of min pan range depends on scale type
              x: null,
              y: null
            },
            rangeMax: {
              // Format of max pan range depends on scale type
              x: null,
              y: null
            },
      
            // On category scale, factor of pan velocity
            speed: 20,
      
            // Minimal pan distance required before actually applying pan
            threshold: 10,
      
            // Function called while the user is panning
            onPan: function({chart}) { console.log(`I'm panning!!!`); },
            // Function called once panning is completed
            onPanComplete: function({chart}) { console.log(`I was panned!!!`); }
          },
      
          // Container for zoom options
          zoom: {
            // Boolean to enable zooming
            enabled: true,
      
            // Enable drag-to-zoom behavior
            drag: true,
      
            // Drag-to-zoom effect can be customized
            // drag: {
            // 	 borderColor: 'rgba(225,225,225,0.3)'
            // 	 borderWidth: 5,
            // 	 backgroundColor: 'rgb(225,225,225)',
            // 	 animationDuration: 0
            // },
      
            // Zooming directions. Remove the appropriate direction to disable
            // Eg. 'y' would only allow zooming in the y direction
            // A function that is called as the user is zooming and returns the
            // available directions can also be used:
            //   mode: function({ chart }) {
            //     return 'xy';
            //   },
            mode: 'xy',
      
            rangeMin: {
              // Format of min zoom range depends on scale type
              x: null,
              y: null
            },
            rangeMax: {
              // Format of max zoom range depends on scale type
              x: null,
              y: null
            },
      
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
      
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
      
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3,
      
            // Function called while the user is zooming
            onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
            // Function called once zooming is completed
            onZoomComplete: function({chart}) { console.log(`I was zoomed!!!`); }
          }
        }
      },
      datasets: [
        {
          label: "Delay",
          data: [98.3, 97.34, 94.12, 99.23, 89.2],
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
        Delay of {props.match.params.url} overtime:
      </h1>
      <div className="detail__chart">
        <Line data={chartData} />
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
