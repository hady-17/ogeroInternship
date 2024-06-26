import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: Object.keys(data[Object.keys(data)[0]]).map((dataset, index) => ({
      label: dataset,
      data: Object.values(data).map(week => week[dataset]),
      borderColor: `rgba(${index * 50}, ${index * 75}, 255, 1)`,
      fill: false,
    })),
  };

  return <Line data={chartData} />;
};

export default LineChart;
