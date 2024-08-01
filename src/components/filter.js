// src/components/Filter.js
import React from 'react';

const Filter = React.memo(({ onChartTypeChange, onDataViewChange }) => {
  return (
    <div>
      <div>
        <button onClick={() => onChartTypeChange('line')}>Line Chart</button>
        <button onClick={() => onChartTypeChange('bar')}>Bar Chart</button>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="daily"
            name="dataView"
            onChange={onDataViewChange}
          />
          Daily
        </label>
        <label>
          <input
            type="radio"
            value="weekly"
            name="dataView"
            onChange={onDataViewChange}
          />
          Weekly
        </label>
        <label>
          <input
            type="radio"
            value="monthly"
            name="dataView"
            defaultChecked
            onChange={onDataViewChange}
          />
          Monthly
        </label>
      </div>
    </div>
  );
});

export default Filter;
