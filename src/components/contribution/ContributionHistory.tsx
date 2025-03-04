import React, { useState } from 'react';

interface Contribution {
  type: 'mandatory' | 'voluntary';
  amount: number;
  date: string;
  status: string;
}

const ContributionHistory: React.FC<{ contributions: Contribution[] }> = ({ contributions }) => {
  const [filter, setFilter] = useState('');

  const filteredContributions = contributions.filter((c) =>
    c.date.includes(filter)
  );

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Contribution History</h3>
      <input
        type="text"
        placeholder="Filter by date (YYYY-MM-DD)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 border p-2 rounded w-full"
      />
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">Date</th>
            <th className="py-2 border">Type</th>
            <th className="py-2 border">Amount ($)</th>
            <th className="py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredContributions.map((c, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 text-center">{c.date}</td>
              <td className="py-2 text-center">
                <span className={`px-2 py-1 rounded ${
                  c.type === 'mandatory' ? 'bg-blue-200' : 'bg-purple-200'
                }`}>
                  {c.type}
                </span>
              </td>
              <td className="py-2 text-center">{c.amount}</td>
              <td className="py-2 text-center">{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributionHistory;
