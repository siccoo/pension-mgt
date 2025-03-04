import React, { useState } from 'react';

const PasswordRecovery: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`If an account exists for ${email}, a recovery link has been sent.`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleRecovery} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Password Recovery</h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <div className="mb-6">
          <label className="block mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
          Send Recovery Email
        </button>
      </form>
    </div>
  );
};

export default PasswordRecovery;
