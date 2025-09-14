import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Lottie from "lottie-react";
import errorAnim from "../../assets/404.json";

const ErrorPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="mt-4 px-4 md:px-6 lg:px-8">
        <div className="min-h-screen  flex flex-col justify-center items-center p-4">
          {/* Lottie Animation */}
          <div className="w-full max-w-md">
            <Lottie animationData={errorAnim} loop={true} />
          </div>

          {/* Text Content */}
          <h1 className="text-6xl font-bold text-red-500 mb-2">404</h1>
          <h2 className="text-xl text-gray-600 mb-6">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-500 mb-6 text-center max-w-md">
            We're sorry, but the page you are looking for does not exist.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg shadow-md transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
