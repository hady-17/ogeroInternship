import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: Object.keys(data[Object.keys(data)[0]]).map((dataset, index) => ({
      label: dataset,
      data: Object.values(data).map(week => week[dataset]),
      backgroundColor: `rgba(${index * 50}, ${index * 75}, 255, 0.6)`,
    })),
  };

  return <Bar data={chartData} />;
};

export default BarChart;
