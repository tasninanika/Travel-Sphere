import { useState, useContext } from "react";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import bgBooking from "../../assets/bg-img.png";
import { useNavigate } from "react-router-dom";
import { FirebaseAuthContext } from "../../provider/FirebaseAuthContext";

// Success Modal Component
const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Booking Successful 🎉
        </h2>
        <p className="text-gray-600 mb-6">
          Your booking has been confirmed. Have a safe journey!
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Booking = () => {
  const [origin, setOrigin] = useState("Dhaka");
  const [destination, setDestination] = useState("Cox's Bazar");
  const [departureDate, setDepartureDate] = useState("01/09");
  const [returnDate, setReturnDate] = useState("12/09");
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { user } = useContext(FirebaseAuthContext);
  const navigate = useNavigate();

  const popularCities = [
    "Dhaka",
    "Cox's Bazar",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barisal",
  ];

  // handle booking
  const handleBooking = () => {
    if (!user) {
      navigate("/login"); // not logged in → redirect login
    } else {
      setShowSuccess(true); // logged in → show success modal
    }
  };

  return (
    <HeroSection bgImage={bgBooking}>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left side: Hero Text */}
        <div className="md:flex-1 text-white space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore Bangladesh Like Never Before
          </h1>
          <p className="md:w-10/12 text-lg md:text-xl text-white/90">
            Discover breathtaking destinations, plan your journey with ease, and
            make unforgettable memories. From pristine beaches to lush hills,
            start your adventure now by selecting your origin, destination, and
            travel dates.
          </p>
          <p className="md:w-10/12 text-white/80">
            Our platform makes booking simple and quick. Find the best trips,
            compare options, and embark on a journey tailored just for you.
          </p>
        </div>

        {/* Right side: Booking Card */}
        <div className="w-full md:w-[420px] bg-white rounded-2xl shadow-xl p-6 md:p-8 relative z-10">
          <div className="space-y-5">
            {/* Origin */}
            <div className="relative">
              <label className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                <MapPin className="h-4 w-4" /> Origin
              </label>
              <div
                className="flex items-center justify-between mt-1 cursor-pointer border-b border-gray-300 py-2 px-3"
                onClick={() => setShowOriginDropdown(!showOriginDropdown)}
              >
                <span className="text-gray-700 font-medium">{origin}</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              {showOriginDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-20">
                  {popularCities.map((city) => (
                    <div
                      key={city}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setOrigin(city);
                        setShowOriginDropdown(false);
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Destination */}
            <div className="relative">
              <label className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                <MapPin className="h-4 w-4" /> Destination
              </label>
              <div
                className="flex items-center justify-between mt-1 cursor-pointer border-b border-gray-300 py-2 px-3"
                onClick={() =>
                  setShowDestinationDropdown(!showDestinationDropdown)
                }
              >
                <span className="text-gray-700 font-medium">{destination}</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
              {showDestinationDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-20">
                  {popularCities.map((city) => (
                    <div
                      key={city}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setDestination(city);
                        setShowDestinationDropdown(false);
                      }}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                  <Calendar className="h-4 w-4" /> From
                </label>
                <input
                  type="text"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  placeholder="DD/MM"
                  className="mt-1 w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-700"
                />
              </div>
              <div className="flex-1">
                <label className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                  <Calendar className="h-4 w-4" /> To
                </label>
                <input
                  type="text"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  placeholder="DD/MM"
                  className="mt-1 w-full border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 text-gray-700"
                />
              </div>
            </div>

            {/* Button */}
            <Button
              label="Start Booking"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg mt-3 transition duration-200"
              onClick={handleBooking}
            />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </HeroSection>
  );
};

export default Booking;
