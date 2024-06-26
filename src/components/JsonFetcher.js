// src/components/JsonFetcher.js
import React, { useEffect } from 'react';
import axios from 'axios';

const JsonFetcher = ({ apiUrl, onDataLoaded }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        onDataLoaded(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl, onDataLoaded]);

  return <p>Loading data...</p>;
};

export default JsonFetcher;
