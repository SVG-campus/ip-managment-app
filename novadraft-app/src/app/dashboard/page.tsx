import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">
          <Link href="/">NovaDraft</Link>
        </div>
        <nav className="space-x-4">
          <span className="text-gray-900 font-bold border-b-2 border-blue-600 pb-1">Dashboard</span>
          <Link href="/brainstorm" className="text-gray-600 hover:text-blue-600 font-medium">Idea Augmenter</Link>
          <Link href="/formatter" className="text-gray-600 hover:text-blue-600 font-medium">IP Formatter</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Inventor Dashboard</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <p className="text-sm text-yellow-800">
            <strong>Legal Disclaimer:</strong> NovaDraft is a software tool to help you brainstorm and format your ideas. We are not attorneys. We cannot give legal advice, and using this tool does not create an attorney-client relationship. You must file your own applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tool 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold mb-2">1. Idea Augmenter</h2>
            <p className="text-gray-600 mb-6 min-h-[60px]">
              Flesh out your raw idea. Our AI will ask you questions to expand your claims, suggest alternative mechanisms, and harden the technical description.
            </p>
            <Link href="/brainstorm" className="inline-block bg-blue-50 text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition">
              Start Brainstorming &rarr;
            </Link>
          </div>

          {/* Tool 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold mb-2">2. IP Formatter</h2>
            <p className="text-gray-600 mb-6 min-h-[60px]">
              Take your augmented idea and automatically format it into the rigid structure required by official USPTO provisional forms.
            </p>
            <Link href="/formatter" className="inline-block bg-green-50 text-green-700 px-6 py-2 rounded-md font-semibold hover:bg-green-100 transition">
              Format for Submission &rarr;
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Your Saved Projects</h2>
          <p className="text-gray-500 italic">No projects saved yet. Connect Supabase database to enable cloud saving.</p>
        </div>
      </main>
    </div>
  );
}
