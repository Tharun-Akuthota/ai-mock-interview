import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="bg-gray-900 w-full max-w-md p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="username"
              placeholder="you@example.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="••••••••"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
