import { MessageSquareMore, ThumbsUp } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Diving to the Deep: Exploring Cox's Bazar Marine Life",
      description:
        "Discover the vibrant underwater world of Cox's Bazar with our guide to the best diving spots and marine species in the Bay of Bengal.",
      date: "13 Jul 2023",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1470&q=80",
      likes: "7.4K",
      comments: "81",
    },
    {
      id: 2,
      title: "Conquer the World's Longest Natural Sea Beach",
      description:
        "Your complete guide to experiencing Cox's Bazar's 120km beach - from sunrise walks to sunset camel rides and local seafood delicacies.",
      date: "4 Nov 2023",
      image:
        "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?auto=format&fit=crop&w=1450&q=80",
      likes: "5.2K",
      comments: "64",
    },
    {
      id: 3,
      title: "Exploring the Beautiful Hill Tracts Near Cox's Bazar",
      description:
        "Venture beyond the beach to discover stunning hill tracts featuring waterfalls, tribal villages, and breathtaking viewpoints.",
      date: "28 Dec 2023",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1470&q=80",
      likes: "8.9K",
      comments: "112",
    },
  ];

  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">
          Our <span className="text-yellow-500">Blogs</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          Explore amazing stories, guides, and travel tips from Cox's Bazar and
          beyond.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={post.image}
              className="object-cover w-full h-48"
              alt={post.title}
              loading="lazy"
            />
            <div className="flex flex-col flex-grow p-4">
              <p className="text-xs text-gray-500 font-medium mb-1">
                {post.date}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                {post.description}
              </p>

              {/* Read More Button */}
              <button className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-medium py-2 rounded-lg transition">
                Read More
              </button>

              <div className="mt-3 flex justify-between items-center border-t pt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="text-yellow-600 h-4 w-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquareMore className="h-4 w-4" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
