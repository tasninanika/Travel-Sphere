import {
  MapPin,
  CalendarDays,
  Users,
  Sun,
  Mountain,
  Waves,
  Utensils,
  Star,
} from "lucide-react";
import { useState } from "react";

const Destination = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAllPhotos] = useState(false);

  const destination = {
    name: "Cox's Bazar",
    location: "Chittagong Division, Bangladesh",
    description:
      "Home to the world's longest natural sea beach, stretching an incredible 120 kilometers along the Bay of Bengal.",
    highlights: [
      "World's longest natural sea beach",
      "Stunning sunset views",
      "Fresh seafood cuisine",
      "Himchari Waterfall",
      "Local tribal culture",
    ],
    bestTimeToVisit: "November to February",
    idealDuration: "3-5 days",
    photos: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1450&q=80",
    ],
    attractions: [
      {
        name: "Cox's Bazar Beach",
        description: "The main 120km beach with golden sands and gentle waves",
        icon: <Waves className="h-6 w-6 text-sky-500" />,
      },
      {
        name: "Himchari National Park",
        description: "Lush hills with waterfalls and hiking trails",
        icon: <Mountain className="h-6 w-6 text-green-600" />,
      },
      {
        name: "Inani Beach",
        description: "Known for its coral stones and clear waters",
        icon: <Sun className="h-6 w-6 text-amber-500" />,
      },
      {
        name: "Local Seafood Markets",
        description: "Fresh catches daily with authentic flavors",
        icon: <Utensils className="h-6 w-6 text-orange-500" />,
      },
    ],
    reviews: [
      {
        user: "Traveler123",
        rating: 5,
        comment:
          "Absolutely breathtaking views and the most peaceful beach experience I've ever had!",
      },
      {
        user: "AdventureSeeker",
        rating: 4,
        comment:
          "Great destination for both relaxation and adventure activities.",
      },
    ],
  };

  return (
    <div className="bg-emerald-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src={destination.photos[1]}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {destination.name}
            </h1>
            <div className="flex items-center justify-center text-lg font-medium">
              <MapPin className="h-5 w-5 mr-2 text-amber-400" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-6 justify-center">
            {["overview", "attractions", "photos", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-3 text-sm font-semibold uppercase tracking-wide transition ${
                  activeTab === tab
                    ? "border-b-2 border-yellow-400 text-yellow-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-10">
          {/* Overview */}
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  About {destination.name}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {destination.description}
                </p>

                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {destination.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Travel Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-3 items-start">
                      <CalendarDays className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Best Time to Visit
                        </h4>
                        <p className="text-gray-600">
                          {destination.bestTimeToVisit}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Users className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Ideal Duration
                        </h4>
                        <p className="text-gray-600">
                          {destination.idealDuration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Card */}
              <div className="md:col-span-1">
                <div className="p-6 rounded-lg border border-gray-300 sticky top-4">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Plan Your Trip
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-yellow-400 hover:bg-green-500 text-white py-3 px-4 rounded-lg font-medium shadow">
                      Book Hotels
                    </button>
                    <button className="w-full bg-red-400 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium shadow">
                      Find Tours
                    </button>
                    <button className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium shadow">
                      Get Travel Guide
                    </button>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium mb-2">Quick Facts</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex justify-between">
                        <span>Language:</span>
                        <span>Bengali, English</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Currency:</span>
                        <span>BDT (৳)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Time Zone:</span>
                        <span>GMT+6</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Best For:</span>
                        <span>Beach lovers, Families</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Attractions */}
          {activeTab === "attractions" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Top Attractions
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {destination.attractions.map((a, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-6 hover:shadow-lg transition bg-white"
                  >
                    <div className="flex items-start gap-4">
                      {a.icon}
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{a.name}</h3>
                        <p className="text-gray-600">{a.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Photos */}
          {activeTab === "photos" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Photos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {(showAllPhotos
                  ? destination.photos
                  : destination.photos.slice(0, 3)
                ).map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`${destination.name} ${i + 1}`}
                    className="rounded-lg shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          {activeTab === "reviews" && (
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Traveler Reviews
              </h2>
              <div className="space-y-6">
                {destination.reviews.map((review, i) => (
                  <div
                    key={i}
                    className="p-6 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
                  >
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`h-5 w-5 ${
                            idx < review.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-3 font-semibold text-gray-800">
                        {review.user}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
                <button className="mt-6 px-6 py-2 border border-gray-300 rounded-lg shadow text-gray-700 hover:bg-gray-100">
                  Write a Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;
