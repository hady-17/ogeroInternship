// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Mock JSON data
const data = {
    
        "January": {
          "Dataset1": [30, 45, 60, 75,55,63,42],
          "Dataset2": [50, 40, 70, 80,17,12,18],
          "Dataset3": [20, 35, 55, 65,1,6,7],
          "Dataset4": [18,12,17,80,70,40,50]
        },
        "February": {
          "Dataset1": [25, 35, 45, 55,30,47,85],
          "Dataset2": [65, 75, 85, 95,46,54,78],
          "Dataset3": [15, 25, 35, 45,56,58,95],
          "Dataset4": [43,85,17,80,40,12,45]
        },
        "March": {
          "Dataset1": [65, 75, 85, 95,46,54,78],
          "Dataset2": [60, 70, 80, 90,16,99,100],
          "Dataset3": [10, 20, 30, 40,59,65,69],
          "Dataset4": [18,12,17,80,70,40,50]
        },
        "April": {
          "Dataset1": [35, 45, 55, 65 ,41 ,44 ,35],
          "Dataset2": [45, 55, 65, 75 , 33 ,21 ,11],
          "Dataset3": [25, 35, 45, 55, 77 ,21 ,77],
          "Dataset4": [13,14,15,16,17,18,19]
        },
        "May": {
          "Dataset1": [40, 50, 60, 70,71,72,73],
          "Dataset2": [50, 60, 70, 80,88,89,90],
          "Dataset3": [30, 40, 50, 60,68,69,70],
          "Dataset4": [20,21,22,23,24,25,26]
        },
        "June": {
          "Dataset1": [45, 55, 65, 75,85,95,105],
          "Dataset2": [55, 65, 75, 85,75,65,60],
          "Dataset3": [35, 45, 55, 65,44,43,42],
          "Dataset4": [11,22,33,44,55,66,77]
        },
        "July": {
          "Dataset1": [50, 60, 70, 80,52,55,90],
          "Dataset2": [60, 70, 80, 90,99,95,63],
          "Dataset3": [40, 50, 60, 70,33,35,36],
          "Dataset4": [50,60,40,30,20,11,19]
        }
      
      

};

// Define a route to get the data
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
