import React, { useEffect, useState } from "react";
import {Line} from 'react-chartjs-2';
import "./Detail.css";


const Detail = (props) => {
const [chartData, setChartData] = useState({})

const chart = () =>{
  setChartData({
    labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    datasets: [
      {
        label: 'uptime',
        data: [98.3, 97.34, 94.12, 99.23, 89.20],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6'
        ],
        borderWidth: 4 
      }
    ]
  })
}

useEffect (() => {
  chart()
}, [])
  return (
    <section >
      <br />
      <br />
      <br />
      <br />
      <h1 className="detail__title">{props.match.params.url}</h1>
      <div className="detail__chart">
        <Line data={chartData}/>
      </div>
      

    </section>
  );
};

export default Detail;
