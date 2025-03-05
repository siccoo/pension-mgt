/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StatementGenerator: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statementData, setStatementData] = useState<any[]>([]);

  const dummyData = [
    { month: "Sep", contribution: 205 },
    { month: "Oct", contribution: 190 },
    { month: "Nov", contribution: 210 },
    { month: "Dec", contribution: 180 },
    { month: "Jan", contribution: 200 },
  ];

  const handleGenerate = () => {
    setStatementData(dummyData);
  };

  const handleExportPDF = () => {
    alert("Exporting statement as PDF...");
  };

  return (
    <div className="container mx-auto p-4">
      <Link
        to="/"
        className="flex items-center text-blue-500 hover:underline mb-4"
      >
        <span className="mr-2">&#8592;</span> Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">Generate Your Statement</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleGenerate}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Generate Statement
        </button>
        <button
          onClick={handleExportPDF}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
        >
          Export PDF
        </button>
      </div>
      {statementData.length > 0 && (
        <div className="mt-6 p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Contribution Growth</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statementData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="contribution" fill="#4A90E2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Benefit Projection Preview</h3>
            <p>
              Based on your history, your projected benefit is $1,200/month.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatementGenerator;
