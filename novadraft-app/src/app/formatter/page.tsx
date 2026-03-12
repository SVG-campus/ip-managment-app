'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Formatter() {
  const [augmentedInput, setAugmentedInput] = useState('');
  const [formattedIP, setFormattedIP] = useState<{title: string, background: string, summary: string, detailed: string, claims: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormat = () => {
    if (!augmentedInput.trim()) return;
    setIsLoading(true);

    // Mock API call for Formatting
    setTimeout(() => {
      setFormattedIP({
        title: "[INVENTION TITLE GOES HERE]",
        background: "FIELD OF THE INVENTION\nThe present disclosure relates generally to [Industry Field], and more particularly to [Specific Mechanism].",
        summary: "SUMMARY OF THE INVENTION\nAn objective of the present invention is to provide a mechanism that improves upon existing solutions by...",
        detailed: "DETAILED DESCRIPTION\nReferring to the structural claims, the invention comprises a housing, a tensioning element (such as a spring or pneumatic cylinder), and...",
        claims: "CLAIMS\n1. An apparatus comprising: a main body; an elastic mechanism coupled to said main body...\n2. The apparatus of claim 1, wherein the elastic mechanism is formed of polycarbonate..."
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard! You can now paste this into the official form.');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">
          <Link href="/">NovaDraft</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard</Link>
          <Link href="/brainstorm" className="text-gray-600 hover:text-blue-600 font-medium">Idea Augmenter</Link>
          <span className="text-gray-900 font-bold border-b-2 border-blue-600 pb-1">IP Formatter</span>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">📋 USPTO Formatter (Copy-Paste Ready)</h1>
        <p className="text-gray-600 mb-8">Paste your brainstormed notes here. The AI will enforce strict provisional patent structuring so you can copy and paste directly into eFS-Web or Patent Center.</p>

        {!formattedIP ? (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <label className="block text-sm font-bold mb-2 text-gray-700">Augmented Notes</label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg p-4 h-48 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Paste the output from the Brainstorming tab here..."
              value={augmentedInput}
              onChange={(e) => setAugmentedInput(e.target.value)}
            />
            <button 
              onClick={handleFormat}
              disabled={isLoading || !augmentedInput.trim()}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-md font-bold hover:bg-green-700 disabled:opacity-50 transition"
            >
              {isLoading ? 'Formatting...' : 'Generate Official Format'}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-green-50 p-4 border border-green-200 rounded-lg flex justify-between items-center">
              <span className="text-green-800 font-bold">✅ Formatting Complete</span>
              <button 
                onClick={() => setFormattedIP(null)}
                className="text-sm text-green-700 hover:underline"
              >
                Start Over
              </button>
            </div>

            {/* Form Sections */}
            {[
              { label: 'Title', content: formattedIP.title },
              { label: 'Background', content: formattedIP.background },
              { label: 'Summary', content: formattedIP.summary },
              { label: 'Detailed Description', content: formattedIP.detailed },
              { label: 'Claims', content: formattedIP.claims },
            ].map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                  <h3 className="font-bold text-lg text-gray-800">{section.label}</h3>
                  <button 
                    onClick={() => handleCopy(section.content)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1 rounded text-sm transition"
                  >
                    Copy Section
                  </button>
                </div>
                <pre className="whitespace-pre-wrap font-mono text-sm text-gray-700 bg-gray-50 p-4 rounded border">
                  {section.content}
                </pre>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
