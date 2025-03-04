import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import RoleBasedElement from '../common/RoleBasedElement';

const MemberDashboard: React.FC = () => {
  const member = {
    profilePic: 'https://via.placeholder.com/150',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    contributions: [
      { month: 'Sep', amount: 205 },
      { month: 'Oct', amount: 190 },
      { month: 'Nov', amount: 210 },
      { month: 'Dec', amount: 180 },
      { month: 'Jan', amount: 200 },
    ],
  };

  const [searchTerm, setSearchTerm] = useState('');
  const filteredContributions = member.contributions.filter((c) =>
    c.month.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
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
            <RoleBasedElement allowedRoles={['member']}>
              <button className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded">
                Edit Profile
              </button>
            </RoleBasedElement>
          </div>
        </div>
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
