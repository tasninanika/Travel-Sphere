import { useState, useEffect } from "react";
import Button from "./Button";
import sajek from "../assets/Sajek.png";
import srimongol from "../assets/Sreemongol.png";
import sundarban from "../assets/Sundorbon.png";
import { Link } from "react-router-dom";

// Location data with descriptions
const locations = [
  {
    name: "Sundarban",
    img: sundarban,
    description:
      "Sundarban is the largest mangrove forest in the world, home to the Royal Bengal Tiger and diverse wildlife.",
  },
  {
    name: "Sajek",
    img: sajek,
    description:
      "Sajek Valley is known for its picturesque landscapes, hills, rivers, and cultural diversity of indigenous people.",
  },
  {
    name: "Sreemongol",
    img: srimongol,
    description:
      "Sreemongol is famous for its tea gardens, scenic beauty, and the natural greenery of northeast Bangladesh.",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeLocation = locations[activeIndex];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-4 md:pt-12 flex flex-col md:flex-row items-center gap-6">
      {/* Left text */}
      <div className="text-white space-y-6 md:flex-1 text-center md:text-justify transition-all duration-500">
        <h3 className="text-3xl md:text-6xl font-semibold">
          {activeLocation.name}
        </h3>
        <p className="md:w-10/12">{activeLocation.description}</p>
        <Link to="/booking">
          <Button label="Booking" />
        </Link>
      </div>

      {/* Right slider images */}
      <div className="flex gap-2 md:gap-4">
        {locations.map((loc, index) => (
          <div
            key={loc.name}
            className={`relative border-2 rounded-2xl transition-all duration-500
              ${
                activeIndex === index
                  ? "border-yellow-400"
                  : "border-gray-400 opacity-50"
              }`}
          >
            <img
              src={loc.img}
              alt={loc.name}
              className="rounded-2xl w-48 h-40 md:h-76 object-cover transition-opacity duration-500"
            />
            {/* Name overlay */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-md text-sm md:text-base font-semibold">
              {loc.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
