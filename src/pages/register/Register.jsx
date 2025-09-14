import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../provider/FirebaseAuthContext";
import Button from "../../components/Button";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
  const {
    createUser,
    setUser,
    updateUser,
    createUserWithGoogle,
    createUserWithFacebook,
  } = useContext(FirebaseAuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...currentUser, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setUser(currentUser);
          });
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    createUserWithGoogle()
      .then((result) => {
        setUser(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleFacebookLogin = () => {
    createUserWithFacebook()
      .then((result) => {
        setUser(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Create Your Account
        </h3>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label font-medium text-sm">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="input w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="label font-medium text-sm">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="input w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="label font-medium text-sm">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="label font-medium text-sm">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            label="Register"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 rounded-lg transition"
          />
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition gap-2"
          >
            <FaGoogle className="text-lg" />
            Sign up with Google
          </button>

          <button
            onClick={handleFacebookLogin}
            className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition gap-2"
          >
            <FaFacebook className="text-blue-600 text-lg" />
            Sign up with Facebook
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
