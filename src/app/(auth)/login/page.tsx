export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-15 rounded-2xl space-y-4">
        <div className="bg-white p-5">
          <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
          <p>Use your email and password to Sign in</p>
        </div>
        <form className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a>Register</a> for free
        </p>
      </div>
    </div>
  );
}
