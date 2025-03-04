import React, { useState } from 'react';

interface Contribution {
  type: 'mandatory' | 'voluntary';
  amount: number;
  date: string;
}

const ContributionForm: React.FC<{ onAdd: (contrib: Contribution) => void }> = ({ onAdd }) => {
  const [type, setType] = useState<'mandatory' | 'voluntary'>('mandatory');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState<string | null>(null);

  const existingMandatory = false;

  const validate = () => {
    if (!amount || !date) {
      setError('Amount and date are required.');
      return false;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(amount)) {
      setError('Amount must be a valid decimal.');
      return false;
    }
    if (new Date(date) > new Date()) {
      setError('Future contribution dates are not allowed.');
      return false;
    }
    if (type === 'mandatory' && existingMandatory) {
      setError('A mandatory contribution has already been made for this month.');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const contrib: Contribution = {
      type,
      amount: parseFloat(amount),
      date,
    };
    onAdd(contrib);
    setAmount('');
    setDate('');
  };

  return (
    <form className="p-4 bg-white rounded shadow-md">
      <h3 className="text-xl font-bold mb-4">Submit Contribution</h3>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="mb-4">
        <label className="block mb-2">Contribution Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'mandatory' | 'voluntary')}
          className="border p-2 rounded w-full"
        >
          <option value="mandatory">Monthly Mandatory</option>
          <option value="voluntary">Voluntary</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Amount ($)</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Contribution Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
        Submit Contribution
      </button>
    </form>
  );
};

export default ContributionForm;
