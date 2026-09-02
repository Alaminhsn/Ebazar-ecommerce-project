import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:4000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Save JWT token
        localStorage.setItem("token", data.token);

        // Save user information
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage("Login successful!");

        // Go to home page
        navigate("/");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-6 sm:p-8">

          <h1 className="text-2xl font-bold flex justify-center items-center text-gray-900 dark:text-white">
            Sign in to your account
          </h1>

          <form onSubmit={handleLogin} className="space-y-4">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                required
                className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full p-2.5 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4"
                />

                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <a
                href="#"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Message */}
            {message && (
              <p className="text-center text-sm text-red-600">
                {message}
              </p>
            )}

            {/* Login button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {/* Signup */}
            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:underline"
              >
                Sign up
              </Link>
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
