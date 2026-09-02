import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Password check
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const response = await fetch(
        "http://localhost:4000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            address: formData.address,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Save JWT token
        localStorage.setItem("token", data.token);

        // Optional: save user information
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage("Registration successful!");

        // Go to login page
        navigate("/login");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">

        <h2 className="text-2xl font-bold mb-6 flex justify-center text-gray-900">
          Create an account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium"
            >
              Your name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
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
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border rounded-lg p-2.5"
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="mr-2"
              required
            />

            <label htmlFor="terms" className="text-sm">
              I accept the Terms and Conditions
            </label>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm text-red-600">
              {message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? "Creating account..." : "Create an account"}
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>

        </form>
      </div>
    </section>
  );
};

export default Signup;
