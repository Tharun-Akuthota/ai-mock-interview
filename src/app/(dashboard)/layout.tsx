"use client";

import Link from "next/link";
import React from "react";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthGuard();
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">AI Interview</h2>

        <nav className="space-y-3">
          <Link href="/dashboard" className="block hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/interview/start" className="block hover:text-blue-400">
            Start Interview
          </Link>
          <Link href="/mcq" className="block hover:text-blue-400">
            MCQs
          </Link>
          <Link href="/history" className="block hover:text-blue-400">
            History
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 text-gray-900">{children}</main>
    </div>
  );
}
