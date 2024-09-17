// src/Homepage.js
import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Carbon Footprint App</h1>
          <nav>
            <a href="#dashboard" className="px-4">Dashboard</a>
            <a href="#emission" className="px-4">Emission Estimation</a>
            <a href="#pathways" className="px-4">Carbon Pathways</a>
            <a href="#reports" className="px-4">Reports</a>
            <a href="#settings" className="px-4">Settings</a>
          </nav>
          <button className="bg-green-800 px-4 py-2 rounded">Profile</button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="bg-green-50 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to Carbon Footprint App</h2>
        <p className="text-lg mb-6">Quantify your coal mine's carbon footprint and explore pathways to carbon neutrality.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded">Get Started</button>
      </section>

      {/* Dashboard Overview */}
      <section id="dashboard" className="py-10">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Dashboard Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-medium mb-2">Total Emissions</h4>
              <p className="text-lg">5,000 tons CO2</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-medium mb-2">Carbon Sinks</h4>
              <p className="text-lg">2,000 tons CO2</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-xl font-medium mb-2">Progress</h4>
              <p className="text-lg">40% towards neutrality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emission Estimation */}
      <section id="emission" className="bg-gray-200 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Emission Estimation Tool</h3>
          <p className="mb-6">Estimate emissions from various mining activities.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded">Start Estimation</button>
        </div>
      </section>

      {/* Carbon Neutrality Pathways */}
      <section id="pathways" className="py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Carbon Neutrality Pathways</h3>
          <p className="mb-6">Explore different strategies to reduce emissions and achieve neutrality.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded">Explore Pathways</button>
        </div>
      </section>

      {/* Recent Activity */}
      <section id="reports" className="bg-gray-200 py-10">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
          <p className="mb-6">View recent reports and updates.</p>
          <div className="bg-white p-4 rounded shadow">
            <p>No recent activity.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Carbon Footprint App</p>
          <div className="mt-2">
            <a href="#privacy" className="px-4">Privacy Policy</a>
            <a href="#terms" className="px-4">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
