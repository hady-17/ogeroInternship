// src/utils/dataTransformer.js
export const transformData = (data, view, selectedMonth = null) => {
  if (!data || typeof data !== 'object') return {};

  const formattedData = {};

  if (view === 'monthly') {
    for (const month in data) {
      if (!data[month] || typeof data[month] !== 'object') continue;

      formattedData[month] = {};
      for (const dataset in data[month]) {
        const total = data[month][dataset].reduce((sum, value) => sum + value, 0);
        formattedData[month][dataset] = total;
      }
    }
  } else if (view === 'weekly') {
    if (!selectedMonth || !data[selectedMonth]) return {};

    const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
    const weeklyData = data[selectedMonth];

    weeks.forEach((week, weekIndex) => {
      formattedData[week] = {};
      for (const dataset in weeklyData) {
        const start = weekIndex * 7;
        const end = start + 7;
        const weekValue = weeklyData[dataset].slice(start, end).reduce((sum, value) => sum + value, 0);
        formattedData[week][dataset] = weekValue;
      }
    });
  } else if (view === 'daily') {
    if (!selectedMonth || !data[selectedMonth]) return {};

    const dailyData = data[selectedMonth];
    for (const dataset in dailyData) {
      dailyData[dataset].forEach((value, dayIndex) => {
        const dayLabel = `Day ${dayIndex + 1}`;
        if (!formattedData[dayLabel]) {
          formattedData[dayLabel] = {};
        }
        formattedData[dayLabel][dataset] = value;
      });
    }
  }

  return formattedData;
};
