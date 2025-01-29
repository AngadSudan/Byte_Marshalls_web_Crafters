import React, { useEffect } from "react";
import "./styles.css"; 
import "./"// Assuming your styles are in styles.css
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "chart.js/auto";

const App = () => {
  useEffect(() => {
    createCharts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <h4>Medicare</h4>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="user-info">
        <span className="message-icon">✉</span>
        <span className="notification-icon">🔔</span>
        <img
          src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg"
          alt="User"
          className="user-img"
        />
      </div>
    </nav>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block sidebar">
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link active" href="#">Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Patients</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Appointments</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Doctors</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
      </ul>
    </nav>
  );
};

// Main Content Component (Dashboard)
const MainContent = () => {
  return (
    <main className="col-md-10 ms-sm-auto px-md-4">
      <h2 className="mt-4">Hello, John!</h2>
      <div className="chart-container">
        {["Total Patients", "New Appointments", "Total Rooms", "Doctors", "ICU Patients", "Patients Discharged"].map((label, index) => (
          <ChartCard key={index} label={label} chartId={`chart${index}`} />
        ))}
      </div>
    </main>
  );
};

// Chart Card Component
const ChartCard = ({ label, chartId }) => {
  return (
    <div className="chart-card">
      <h5>{label}</h5>
      <canvas id={chartId}></canvas>
    </div>
  );
};

// Function to Create Charts
const createCharts = () => {
  const chartData = [
    { id: "chart0", label: "Total Patients", data: [2015, 2100, 2200, 2300, 2400, 2500] },
    { id: "chart1", label: "New Appointments", data: [550, 600, 650, 700, 750, 800] },
    { id: "chart2", label: "Total Rooms", data: [2000, 2050, 2100, 2150, 2200, 2250] },
    { id: "chart3", label: "Doctors", data: [50, 55, 60, 65, 70, 75] },
    { id: "chart4", label: "ICU Patients", data: [30, 40, 50, 60, 70, 80] },
    { id: "chart5", label: "Patients Discharged", data: [300, 350, 400, 450, 500, 550] }
  ];

  chartData.forEach(({ id, label, data }) => {
    const ctx = document.getElementById(id)?.getContext("2d");
    if (ctx) {
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [{
            label,
            data,
            borderColor: "white",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderWidth: 2,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { ticks: { color: "white" } },
            y: { ticks: { color: "white" } }
          }
        }
      });
    }
  });
};

export default App;
