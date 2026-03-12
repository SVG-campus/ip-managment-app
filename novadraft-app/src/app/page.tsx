import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-blue-600">NovaDraft</div>
        <nav className="space-x-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard</Link>
          <Link href="/brainstorm" className="text-gray-600 hover:text-blue-600 font-medium">Idea Augmenter</Link>
          <Link href="/formatter" className="text-gray-600 hover:text-blue-600 font-medium">IP Formatter</Link>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">The IP Development Hub for Inventors</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Brainstorm, augment, and perfectly format your invention ideas so you can safely copy and paste them into official forms without making critical mistakes.
          </p>
          <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md hover:bg-blue-700 transition">
            Start Developing Your IP
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">AI Brainstorming</h3>
            <p className="text-gray-600">Securely expand your idea with alternative materials, mechanisms, and novel use-cases.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">📑</div>
            <h3 className="text-xl font-bold mb-2">Claim Expansion</h3>
            <p className="text-gray-600">Automatically draft broad and narrow dependent claims that fully protect your concept.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-2">Perfect Formatting</h3>
            <p className="text-gray-600">Generate rigid, USPTO-style templates ready for you to copy and paste to official portals.</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-20">
        <p>© 2026 NovaDraft. All rights reserved.</p>
        <p className="text-sm mt-2 max-w-3xl mx-auto">
          Disclaimer: NovaDraft is an educational and formatting tool. We are not a law firm, and we do not act as your patent attorney. We do not submit applications on your behalf. All users must review and submit their own materials.
        </p>
      </footer>
    </div>
  );
}
