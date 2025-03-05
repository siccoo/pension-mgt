
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/session/sessionSlice';
// import RoleBasedElement from '../RoleBasedElement';
import Avatar from "../../assets/avatar.png";

const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const member = {
    profilePic: Avatar,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    nextOfKin: {
      name: "Jane Doe",
      relationship: "Spouse",
      phone: "987-654-3210",
    },
    employer: {
      name: "ACME Corp",
      address: "123 Main St, City, Country",
      contact: "555-555-5555",
    },
    contributions: [
      { month: 'Sep', amount: 205, date: "2025-09-15" },
      { month: 'Oct', amount: 190, date: "2025-10-15" },
      { month: 'Nov', amount: 210, date: "2025-11-15" },
      { month: 'Dec', amount: 180, date: "2025-12-15" },
      { month: 'Jan', amount: 200, date: "2026-01-15" },
    ],
  };

  // For contribution chart filtering (if needed)
  const [searchTerm, setSearchTerm] = useState('');
  const filteredContributions = member.contributions.filter((c) =>
    c.month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    dispatch(setUser(null));
    navigate('/login');
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-end gap-4 mb-6">
        <Link to="/contributions" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Contributions
        </Link>
        <Link to="/statement" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Statement
        </Link>
        <Link to="/notifications" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Notifications
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Member Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
          <img
            src={member.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto"
            loading="lazy"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.phone}</p>
          </div>
          <div className="mt-4 border-t pt-4">
            <h3 className="font-bold text-lg">Next of Kin</h3>
            <p><strong>Name:</strong> {member.nextOfKin.name}</p>
            <p><strong>Relationship:</strong> {member.nextOfKin.relationship}</p>
            <p><strong>Phone:</strong> {member.nextOfKin.phone}</p>
          </div>
          <div className="mt-4 border-t pt-4">
            <h3 className="font-bold text-lg">Employer Information</h3>
            <p><strong>Name:</strong> {member.employer.name}</p>
            <p><strong>Address:</strong> {member.employer.address}</p>
            <p><strong>Contact:</strong> {member.employer.contact}</p>
          </div>
          <div className="mt-4 border-t pt-4">
            <h3 className="font-bold text-lg">Recent Contributions</h3>
            <ul>
              {member.contributions.map((c, index) => (
                <li key={index} className="text-sm">
                  {c.date} - ${c.amount}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Contribution Visualization */}
        <div className="bg-white p-4 rounded shadow-md w-full md:w-2/3">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Contribution Statistics</h3>
            <input
              type="text"
              placeholder="Search by month..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-2 border p-2 rounded w-full"
            />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredContributions}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#4A90E2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
