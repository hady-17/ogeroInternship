// src/components/ParentComponent.js
import React, { useState } from 'react';
import JsonFetcher from './JsonFetcher';
import LineChart from './LineChart';
import BarChart from './BarChart';
import Filter from './filter';
import { transformData } from './dataTrans';

const Parent = () => {
  const [chartData, setChartData] = useState(null);
  const [chartType, setChartType] = useState('line');
  const [dataView, setDataView] = useState('monthly');
  const [selectedMonth, setSelectedMonth] = useState('January');

  const handleDataLoaded = (data) => {
    setChartData(data);
  };

  const handleChartTypeChange = (type) => {
    setChartType(type);
  };

  const handleDataViewChange = (event) => {
    setDataView(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const renderChart = () => {
    if (!chartData) {
      return <p>Loading data...</p>;
    }

    const filteredData = transformData(chartData, dataView, selectedMonth);

    if (Object.keys(filteredData).length === 0) {
      return <p>No data available for this selection.</p>;
    }

    switch (chartType) {
      case 'line':
        return <LineChart data={filteredData} />;
      case 'bar':
        return <BarChart data={filteredData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Chart Visualizer</h1>
      <JsonFetcher apiUrl="http://localhost:3001/data" onDataLoaded={handleDataLoaded} />
      <Filter onChartTypeChange={handleChartTypeChange} onDataViewChange={handleDataViewChange} />
      {dataView !== 'monthly' && chartData && (
        <select onChange={handleMonthChange} value={selectedMonth}>
          {Object.keys(chartData || {}).map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      )}
      {renderChart()}
    </div>
  );
};

export default Parent;
