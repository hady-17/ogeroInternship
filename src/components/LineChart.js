import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = React.memo(({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: Object.keys(data[Object.keys(data)[0]]).map((dataset, index) => ({
      label: dataset,
      data: Object.values(data).map(week => week[dataset]),
      borderColor: `rgba(${index * 50}, ${index * 75}, 255, 1)`,
      fill: false,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 500, // Reduce the animation duration for faster renders
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      animationDuration: 0, // Disable hover animation
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', height: '400px' }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
});

export default LineChart;
