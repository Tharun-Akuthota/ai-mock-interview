export default function StartInterviewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Start Mock Interview</h1>

      <div className="bg-white p-6 rounded shadow max-w-lg">
        <label className="block mb-2 font-medium">Choose Interview Type</label>

        <select className="w-full border rounded px-3 py-2 mb-4">
          <option>Frontend</option>
          <option>Backend</option>
          <option>HR</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Start Interview
        </button>
      </div>
    </div>
  );
}
