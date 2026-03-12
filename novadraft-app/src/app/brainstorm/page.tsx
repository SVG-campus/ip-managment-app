'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Brainstorm() {
  const [idea, setIdea] = useState('');
  const [augmentedIdea, setAugmentedIdea] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAugment = async () => {
    if (!idea.trim()) return;
    
    setIsLoading(true);
    
    // Simulating API call to Gemini MCP
    setTimeout(() => {
      setAugmentedIdea(`
Based on your idea, here are several ways to expand and harden your technical claims:

1. Materials Expansion: Instead of just "plastic", consider claiming "a rigid polymer, including but not limited to polycarbonate, ABS, or carbon-fiber reinforced composites."
2. Mechanism Alternative: You mentioned a spring. Consider adding claims for "elastic tensioners, pneumatic cylinders, or magnetic repulsion systems" to prevent competitors from designing around your core concept.
3. Use-Case Breadth: While you designed this for automotive, the exact same mechanism could be claimed for aerospace and maritime applications.

(Note: Connect your Gemini API Key in .env to replace this mockup with live AI generation.)
      `);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">
          <Link href="/">NovaDraft</Link>
        </div>
        <nav className="space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard</Link>
          <span className="text-gray-900 font-bold border-b-2 border-blue-600 pb-1">Idea Augmenter</span>
          <Link href="/formatter" className="text-gray-600 hover:text-blue-600 font-medium">IP Formatter</Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-2">🧠 AI Idea Augmenter</h1>
        <p className="text-gray-600 mb-8">Describe your raw invention below. Our AI will help you brainstorm broader claims and alternative mechanisms to make your IP stronger.</p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <label className="block text-sm font-bold mb-2 text-gray-700">Your Raw Idea</label>
          <textarea 
            className="w-full border border-gray-300 rounded-lg p-4 h-48 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Describe your invention here... e.g. A phone case that uses a spring-loaded mechanism to pop out a kickstand."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />
          <button 
            onClick={handleAugment}
            disabled={isLoading || !idea.trim()}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {isLoading ? 'Augmenting...' : 'Harden & Expand Idea'}
          </button>
        </div>

        {augmentedIdea && (
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h2 className="text-xl font-bold text-blue-800 mb-4">AI Suggestions</h2>
            <pre className="whitespace-pre-wrap font-sans text-gray-800">
              {augmentedIdea}
            </pre>
            <div className="mt-6 flex gap-4">
              <Link href="/formatter" className="bg-green-600 text-white px-6 py-2 rounded-md font-bold hover:bg-green-700 transition">
                Proceed to Formatting
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
