"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "../../../../../lib/api";
import Chat from "../../../../../components/interview/Chat";

export default function InterviewPage() {
  const { id } = useParams() as { id: string };

  const [interview, setInterview] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const res = await api.get(`/interview/${id}`);
        setInterview(res.data.interview);
      } catch (error) {
        console.error("Failed to load interview");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchInterview();
  }, [id]);

  if (loading) return <p>Loading interview...</p>;
  if (!interview) return <p>Interview not found</p>;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mock Interview</h1>

      <div className="bg-white rounded shadow">
        <Chat interview={interview} />
      </div>
    </div>
  );
}
