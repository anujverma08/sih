import { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // For importing Chart.js components
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const images = [image1, image2, image3];

const summaryData = {
  totalEmissions: 5000, // Example data
  carbonSinks: 2000,    // Example data
  progress: 40          // Example data in percentage
};

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Emissions',
      data: [300, 500, 700, 600, 800, 900], // Example data
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      fill: true,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const barChartData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Quarterly Emissions',
      data: [1200, 1500, 1800, 2000], // Example data
      backgroundColor: '#ff5722',
    },
  ],
};

const barChartOptions = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Automatically move to the next slide after 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative">
      {/* Slideshow */}
      <div className="relative w-full" style={{ height: 'calc(100vh - 4rem)' }}>
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        >
          &#9664;
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        >
          &#9654;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Welcome Page */}
      <section className="bg-green-50 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Carbon Footprint App</h2>
        <p className="text-lg mb-6">
          Our application is designed to assist Indian coal mines in their journey towards carbon neutrality.
          By quantifying your mine's carbon footprint and evaluating various emission reduction strategies,
          we help you identify and implement effective measures to reduce your environmental impact.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded">Get Started</button>
      </section>

      {/* Main Dashboard */}
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">Main Dashboard</h1>

        {/* Summary Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Emissions</h2>
            <p className="text-2xl">{summaryData.totalEmissions} tons CO2</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Carbon Sinks</h2>
            <p className="text-2xl">{summaryData.carbonSinks} tons CO2</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Progress</h2>
            <p className="text-2xl">{summaryData.progress}% towards neutrality</p>
          </div>
        </div>

        {/* Sample Visualizations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Monthly Emissions Trend</h2>
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quarterly Emissions Overview</h2>
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
