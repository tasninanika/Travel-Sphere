import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../provider/FirebaseAuthContext";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { setUser, loginUser, createUserWithGoogle } =
    useContext(FirebaseAuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        setUser(currentUser);
        navigate("/");
      })
      .catch((err) => setError(err.code));
  };

  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-500 font-medium">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} />
            <span>Sign in with Google</span>
          </button>
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition gap-2">
            <FaFacebook className="text-blue-600 text-lg" />
            Sign in with Facebook
          </button>
        </div>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
