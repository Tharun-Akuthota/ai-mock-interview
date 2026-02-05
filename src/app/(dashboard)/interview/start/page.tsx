"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "../../../../../lib/api";

export default function StartInterviewPage() {
  const router = useRouter();
  const [type, setType] = useState("frontend");
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);

    try {
      const res = await api.post("/interview/start", {
        type,
      });

      const interviewId = res.data.interview._id;
      router.push(`/interview/${interviewId}`);
    } catch (error) {
      console.log(type);
      console.error("Failed to start interview", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Start Mock Interview</h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">
        <label className="block mb-2 font-medium">Choose Interview Type</label>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        >
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="hr">HR</option>
        </select>

        <button
          onClick={handleStart}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Starting..." : "Start Interview"}
        </button>
      </div>
    </div>
  );
}
