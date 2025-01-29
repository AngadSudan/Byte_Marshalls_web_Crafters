import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Line } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

const CareVerseDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState("Select Doctor");
  const [date, setDate] = useState("");

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.text("Patient Report", 10, 10);
    doc.save("patient_report.pdf");
  };

  const bookAppointment = (e) => {
    e.preventDefault();
    if (doctor !== "Select Doctor" && date) {
      setAppointments([...appointments, { doctor, date }]);
      setDoctor("Select Doctor");
      setDate("");
    }
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "BP",
        data: [120, 125, 130, 128, 126],
        borderColor: "red",
        fill: false,
      },
      {
        label: "HR",
        data: [72, 75, 78, 80, 76],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <aside className="w-56 bg-green-700 p-5 h-screen fixed">
        <h2 className="text-xl font-bold">CareVerse</h2>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600">Dashboard</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600">Appointments</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600">Doctors</a>
          <a href="#" className="block py-2 px-4 rounded hover:bg-green-600">History</a>
        </nav>
      </aside>
      <main className="ml-60 p-6 flex flex-col gap-6 w-full">
        <div className="bg-white text-black p-4 rounded shadow text-center">
          <h2 className="text-xl font-semibold">Patient Overview</h2>
          <button onClick={downloadReport} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Download Report</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white text-black p-4 rounded shadow">
            <h3 className="font-semibold">Patient Info</h3>
            <p><strong>ID:</strong> 123456</p>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 45</p>
            <p><strong>BP:</strong> 130/85 mmHg</p>
            <p><strong>Doctor:</strong> Dr. Smith</p>
          </div>
          <div className="bg-white text-black p-4 rounded shadow">
            <h3 className="font-semibold">Top Doctors</h3>
            <ul>
              <li>Dr. James Smith - Cardiologist</li>
              <li>Dr. Linda Johnson - Endocrinologist</li>
            </ul>
          </div>
        </div>
        <div className="bg-white text-black p-4 rounded shadow">
          <Line data={data} />
        </div>
        <div className="bg-white text-black p-4 rounded shadow">
          <h3 className="font-semibold">Book Appointment</h3>
          <form onSubmit={bookAppointment} className="flex flex-col gap-2">
            <select value={doctor} onChange={(e) => setDoctor(e.target.value)} className="p-2 border rounded">
              <option>Select Doctor</option>
              <option>Dr. Smith</option>
              <option>Dr. Johnson</option>
            </select>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border rounded" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Book Now</button>
          </form>
        </div>
        <div className="bg-white text-black p-4 rounded shadow">
          <h3 className="font-semibold">Booked Appointments</h3>
          <ul>
            {appointments.map((appt, index) => (
              <li key={index}>{`Appointment with ${appt.doctor} on ${appt.date}`}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default CareVerseDashboard;
