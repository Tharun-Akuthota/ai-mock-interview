"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../../lib/api";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = res.data;
      localStorage.setItem("token", token);

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-2xl space-y-6 max-w-md">
        <div className="p-5 rounded">
          <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
          <p className="text-gray-300">Use your email and password to Log in</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="username"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
            />
          </div>

          {error && (
            <span className="flex">
              <IoCloseCircleOutline className="text-red-500 w-5 h-5" />
              <p className="text-red-500 text-sm">{error}</p>
            </span>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>{" "}
          for free
        </p>
      </div>
    </div>
  );
}
