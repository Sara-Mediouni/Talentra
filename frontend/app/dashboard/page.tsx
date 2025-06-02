'use client';
import { useState } from 'react';
import MyProfile from '../components/MyProfile';
import MyApplications from '../components/MyApplications';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'applications'>('profile');

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-yellow-500">Dashboard</h2>
        <nav className="space-y-3">
          <button
            onClick={() => setActiveTab('profile')}
            className={`block w-full text-left px-4 py-6 rounded-lg transition ${
              activeTab === 'profile'
                ? 'bg-yellow-100 text-gray-600 font-bold'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            My Profile
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`block w-full text-left px-4 py-6 rounded-lg transition ${
              activeTab === 'applications'
                ? 'bg-yellow-100 text-gray-600 font-bold'
                : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            My Applications
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {activeTab === 'profile' ? <MyProfile /> : <MyApplications />}
      </main>
    </div>
  );
}
