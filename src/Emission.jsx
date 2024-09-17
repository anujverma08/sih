// src/EmissionEstimation.js
import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const Emission = () => {
  const [activity, setActivity] = useState('');
  const [distance, setDistance] = useState('');
  const [fuel, setFuel] = useState('');
  const [duration, setDuration] = useState('');
  const [tons, setTons] = useState('');
  const [emissions, setEmissions] = useState(null);

  // Handle form changes
  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleFuelChange = (e) => {
    setFuel(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleTonsChange = (e) => {
    setTons(e.target.value);
  };

  // Calculate emissions based on selected activity
  const calculateEmissions = () => {
    let emissions = 0;

    if (activity === 'transportation') {
      const distanceValue = parseFloat(distance) || 0;
      const fuelValue = parseFloat(fuel) || 0;

      const distanceFactor = 2.0;
      const fuelFactor = 2.5;

      emissions = (distanceValue * distanceFactor) + (fuelValue * fuelFactor);
    } else if (activity === 'equipment') {
      const durationValue = parseFloat(duration) || 0;

      const equipmentFactor = 1.5;

      emissions = durationValue * equipmentFactor;
    } else if (activity === 'excavation') {
      const tonsValue = parseFloat(tons) || 0;

      const excavationFactor = 0.5;

      emissions = tonsValue * excavationFactor;
    }

    setEmissions(emissions);
  };

  // Prepare data for charts
  const lineChartData = {
    labels: [activity],
    datasets: [{
      label: 'Carbon Emissions (kg CO2)',
      data: [emissions || 0],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      fill: true
    }]
  };

  const doughnutChartData = {
    labels: ['Emissions'],
    datasets: [{
      label: 'Carbon Emissions (kg CO2)',
      data: [emissions || 0],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-center text-2xl font-bold mb-4">Emission Estimation</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="activity" className="block mb-2 font-bold">Select Mining Activity:</label>
          <select
            id="activity"
            name="activity"
            value={activity}
            onChange={handleActivityChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">--Select Activity--</option>
            <option value="excavation">Excavation</option>
            <option value="transportation">Transportation</option>
            <option value="equipment">Equipment</option>
          </select>
        </div>
        {activity === 'transportation' && (
          <div>
            <div className="mb-4">
              <label htmlFor="distance" className="block mb-2 font-bold">Distance Traveled (km):</label>
              <input
                type="number"
                id="distance"
                name="distance"
                value={distance}
                onChange={handleDistanceChange}
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fuel" className="block mb-2 font-bold">Fuel Used (liters):</label>
              <input
                type="number"
                id="fuel"
                name="fuel"
                value={fuel}
                onChange={handleFuelChange}
                step="0.01"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        )}
        {activity === 'equipment' && (
          <div className="mb-4">
            <label htmlFor="duration" className="block mb-2 font-bold">Total Duration (hours):</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={duration}
              onChange={handleDurationChange}
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}
        {activity === 'excavation' && (
          <div className="mb-4">
            <label htmlFor="tons" className="block mb-2 font-bold">Amount Excavated (tons):</label>
            <input
              type="number"
              id="tons"
              name="tons"
              value={tons}
              onChange={handleTonsChange}
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        )}
        <button
          type="button"
          onClick={calculateEmissions}
          className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Estimate Emissions
        </button>
      </form>
      {emissions !== null && (
        <>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
            <strong>Total Carbon Emissions:</strong> {emissions.toFixed(2)} kg CO2
          </div>
          <div className="mt-4">
            <div className="chart-container">
              <Line data={lineChartData} />
            </div>
            <div className="chart-container mt-4">
              <Doughnut data={doughnutChartData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Emission;
