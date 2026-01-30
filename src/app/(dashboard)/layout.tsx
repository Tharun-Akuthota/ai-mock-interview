import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">AI Interview</h2>

        <nav className="space-y-3">
          <a href="/dashboard" className="block hover:text-blue-400">
            Dashboard
          </a>
          <a href="/interview/start" className="block hover:text-blue-400">
            Start Interview
          </a>
          <a href="/mcq" className="block hover:text-blue-400">
            MCQs
          </a>
          <a href="/history" className="block hover:text-blue-400">
            History
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 text-gray-900">{children}</main>
    </div>
  );
}
