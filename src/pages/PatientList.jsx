import React, { useState } from "react";
import jsPDF from "jspdf";

const patients = [
    { name: "Leslie Alexander", diagnosis: [
        { title: "Blood Pressure", value: "120/80" },
        { title: "Heart Rate", value: "72 bpm" },
        { title: "Condition", value: "Diabetes" }
    ]},
    { name: "John Doe", diagnosis: [
        { title: "Blood Pressure", value: "130/85" },
        { title: "Heart Rate", value: "80 bpm" },
        { title: "Condition", value: "Hypertension" }
    ]}
];

export default function MedicalDashboard() {
    const [selectedPatient, setSelectedPatient] = useState(null);

    const downloadReport = () => {
        const doc = new jsPDF();
        doc.text("Patient Report", 20, 10);
        doc.text("Patient Name: " + (selectedPatient ? selectedPatient.name : "None"), 20, 20);
        doc.save("patient-report.pdf");
    };

    return (
        <div className="flex min-h-screen font-sans bg-gray-100">
            <div className="w-64 bg-green-800 text-white p-6 fixed h-full flex flex-col">
                <h2 className="text-lg font-semibold text-center mb-6">CareVerse</h2>
                <nav className="flex flex-col space-y-2">
                    {["Dashboard", "Appointments", "Patients", "Doctors", "Finance", "History"].map((item) => (
                        <a key={item} href="#" className="p-3 rounded hover:bg-green-700">{item}</a>
                    ))}
                </nav>
            </div>
            <div className="ml-72 flex-1 p-6">
                <div className="bg-white p-4 shadow rounded-lg flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Medical Dashboard</h3>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={downloadReport}>Download Report</button>
                </div>
                <div className="flex space-x-6">
                    <div className="bg-white p-4 shadow rounded-lg w-1/3 h-[80vh] overflow-y-auto">
                        {patients.map((patient, index) => (
                            <div
                                key={index}
                                className={`p-3 border-b cursor-pointer rounded ${selectedPatient?.name === patient.name ? "bg-gray-300" : "hover:bg-gray-200"}`}
                                onClick={() => setSelectedPatient(patient)}
                            >
                                {patient.name}
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg w-2/3 h-[80vh] overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-4">
                            Diagnosis History {selectedPatient ? `- ${selectedPatient.name}` : ""}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {selectedPatient?.diagnosis.map((item, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded shadow text-center">
                                    <strong>{item.title}</strong>: {item.value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
