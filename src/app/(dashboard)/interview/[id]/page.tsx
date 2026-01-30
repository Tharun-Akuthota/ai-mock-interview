import Chat from "../../../../../components/interview/Chat";

export default function InterviewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mock Interview</h1>

      <div className="bg-white rounded shadow">
        <Chat />
      </div>
    </div>
  );
}
