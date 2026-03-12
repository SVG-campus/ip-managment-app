'use client';

import React, { useState } from 'react';

export default function AdminPortal() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock Authentication for future employee usage
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would be tied to Supabase Auth roles checking for 'is_patent_bar_holder'
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid patent bar authorization credentials.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full text-white shadow-2xl">
          <h1 className="text-2xl font-bold mb-2">🔒 NovaDraft Intranet</h1>
          <p className="text-gray-400 mb-6 text-sm">Authorized access only. You must be a verified Patent Bar Holder to use the Submission Tools.</p>
          <form onSubmit={handleLogin}>
            <input 
              type="password"
              placeholder="Enter Employee Key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500 mb-4"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
              Authenticate
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold">NovaDraft | <span className="text-blue-400">Patent Representative Console</span></div>
        <div className="text-sm font-mono bg-gray-800 px-3 py-1 rounded text-green-400">BAR STATUS: VERIFIED</div>
      </header>
      
      <main className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">Client Submission Queue</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-bold text-gray-600 text-sm uppercase">Client ID</th>
                <th className="p-4 font-bold text-gray-600 text-sm uppercase">Project Title</th>
                <th className="p-4 font-bold text-gray-600 text-sm uppercase">Status</th>
                <th className="p-4 font-bold text-gray-600 text-sm uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* Mock Queue Items */}
              {[1, 2, 3].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="p-4 font-mono text-sm">USR-{Math.floor(Math.random() * 10000)}</td>
                  <td className="p-4 text-gray-800 font-medium">Smart Drone Propeller Config #{item}</td>
                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded">Pending Review</span>
                  </td>
                  <td className="p-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1 rounded">
                      Review & File (USPTO Integration)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
