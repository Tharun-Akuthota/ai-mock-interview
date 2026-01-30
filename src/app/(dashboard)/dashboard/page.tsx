export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Interviews</h3>
          <p className="text-2xl mt-2">5</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Average Score</h3>
          <p className="text-2xl mt-2">72%</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Last Interview</h3>
          <p className="text-sm mt-2">Frontend Mock</p>
        </div>
      </div>
    </div>
  );
}
