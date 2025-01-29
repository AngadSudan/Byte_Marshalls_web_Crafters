import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Menu</h3>
        <ul>
          <li>Dashboard</li>
          <li>Appointments</li>
          <li>Patients</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            <i className="fas fa-search"></i>
          </a>
          <div className="nav-icons">
            <i className="fas fa-comment"></i>
            <i className="fas fa-bell"></i>
            <img
              src="https://via.placeholder.com/40"
              className="doctor-profile"
              alt="Doctor"
            />
          </div>
        </nav>

        {/* Appointments Section */}
        <div className="container mt-4">
          <h2 className="mb-3">My Appointments</h2>
          <div className="appointment-card">
            <table className="table table-bordered">
              <thead className="table-primary">
                <tr>
                  <th>Patient Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "John Doe", age: 45, contact: "+123456789", time: "10:00 AM", status: "Confirmed", badge: "bg-success" },
                  { name: "Jane Smith", age: 38, contact: "+987654321", time: "10:30 AM", status: "Pending", badge: "bg-warning" },
                  { name: "Mike Johnson", age: 50, contact: "+1122334455", time: "11:00 AM", status: "Cancelled", badge: "bg-danger" },
                  { name: "Lisa Brown", age: 29, contact: "+5566778899", time: "11:30 AM", status: "Confirmed", badge: "bg-success" },
                  { name: "Tom Wilson", age: 42, contact: "+9988776655", time: "12:00 PM", status: "Pending", badge: "bg-warning" }
                ].map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.name}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.contact}</td>
                    <td>{appointment.time}</td>
                    <td>
                      <span className={`badge ${appointment.badge}`}>
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
