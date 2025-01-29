import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CareVerseDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState("Select Doctor");
  const [date, setDate] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");

  const healthData = [
    { month: "Jan", BP: 120, HR: 72 },
    { month: "Feb", BP: 125, HR: 75 },
    { month: "Mar", BP: 130, HR: 78 },
    { month: "Apr", BP: 128, HR: 80 },
    { month: "May", BP: 126, HR: 76 },
  ];

  const doctorsList = [
    {
      name: "Dr. James Smith",
      specialty: "Cardiologist",
      availability: "Mon, Wed, Fri",
    },
    {
      name: "Dr. Linda Johnson",
      specialty: "Endocrinologist",
      availability: "Tue, Thu",
    },
    {
      name: "Dr. Robert Williams",
      specialty: "Neurologist",
      availability: "Mon, Thu",
    },
    {
      name: "Dr. Sarah Davis",
      specialty: "Pediatrician",
      availability: "Wed, Fri",
    },
  ];

  const medicalHistory = [
    {
      date: "2024-01-15",
      type: "Check-up",
      doctor: "Dr. Smith",
      notes: "Regular check-up, BP slightly elevated",
    },
    {
      date: "2024-02-01",
      type: "Blood Test",
      doctor: "Dr. Johnson",
      notes: "All values within normal range",
    },
    {
      date: "2024-03-10",
      type: "ECG",
      doctor: "Dr. Smith",
      notes: "Normal sinus rhythm",
    },
  ];

  const bookAppointment = (e) => {
    e.preventDefault();
    if (doctor !== "Select Doctor" && date) {
      setAppointments([...appointments, { doctor, date }]);
      setDoctor("Select Doctor");
      setDate("");
    }
  };

  const renderDashboard = () => (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
        <h2 className="text-xl font-semibold">Patient Overview</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Patient Info</h3>
          <div className="space-y-2">
            <p>
              <span className="font-medium">ID:</span> 123456
            </p>
            <p>
              <span className="font-medium">Name:</span> John Doe
            </p>
            <p>
              <span className="font-medium">Age:</span> 45
            </p>
            <p>
              <span className="font-medium">BP:</span> 130/85 mmHg
            </p>
            <p>
              <span className="font-medium">Doctor:</span> Dr. Smith
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Top Doctors</h3>
          <ul className="space-y-2">
            <li>Dr. James Smith - Cardiologist</li>
            <li>Dr. Linda Johnson - Endocrinologist</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Health Trends</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={healthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="BP"
                stroke="#ef4444"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="HR"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );

  const renderAppointments = () => (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Book Appointment</h3>
        <form onSubmit={bookAppointment} className="space-y-4">
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Select Doctor</option>
            <option>Dr. Smith</option>
            <option>Dr. Johnson</option>
          </select>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Booked Appointments</h3>
        {appointments.length === 0 ? (
          <p className="text-gray-500">No appointments booked yet.</p>
        ) : (
          <ul className="space-y-2">
            {appointments.map((appt, index) => (
              <li key={index} className="p-3 bg-gray-50 rounded-lg">
                Appointment with {appt.doctor} on {appt.date}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );

  const renderDoctors = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-6">Available Doctors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctorsList.map((doc, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h4 className="font-semibold text-lg">{doc.name}</h4>
            <p className="text-gray-600">{doc.specialty}</p>
            <p className="text-sm text-gray-500">
              Available: {doc.availability}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-6">Medical History</h3>
      <div className="space-y-4">
        {medicalHistory.map((record, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <span className="font-medium">{record.type}</span>
              <span className="text-sm text-gray-500">{record.date}</span>
            </div>
            <p className="text-gray-600">Doctor: {record.doctor}</p>
            <p className="text-gray-600 mt-2">{record.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return renderDashboard();
      case "Appointments":
        return renderAppointments();
      case "Doctors":
        return renderDoctors();
      case "History":
        return renderHistory();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="fixed w-64 h-screen bg-white border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-green-600">CareVerse</h2>
        </div>
        <nav className="mt-4">
          {["Dashboard", "Appointments", "Doctors", "History"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`w-full text-left px-6 py-3 transition-colors ${
                activeTab === item
                  ? "bg-green-50 text-green-600 border-r-4 border-green-600"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-6">{renderContent()}</div>
      </main>
    </div>
  );
};

export default CareVerseDashboard;
