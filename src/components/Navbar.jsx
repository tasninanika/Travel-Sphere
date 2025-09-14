import { useState, useContext, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(FirebaseAuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isHome = location.pathname === "/";

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : isHome
      ? "hover:text-yellow-400 text-white"
      : "hover:text-yellow-400 text-black";

  const links = (
    <>
      <NavLink to="/news" className={navLinkClass}>
        News
      </NavLink>
      <NavLink to="/destination" className={navLinkClass}>
        Destination
      </NavLink>
      <NavLink to="/blogs" className={navLinkClass}>
        Blogs
      </NavLink>
      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  // ✅ Redirect to homepage on login
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <nav
      className={`w-full z-50 ${
        isHome ? "absolute top-0 left-0 text-white" : "bg-white text-black"
      }`}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Left side: Logo + Search */}
        <div className="flex items-center gap-4">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src={isHome ? logo1 : logo} alt="Logo" className="w-24" />
          </div>

          {isHome && (
            <div className="flex-1 max-w-md hidden md:flex items-center relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-full" />
              <input
                type="text"
                placeholder="Search your destination..."
                className="w-96 pl-10 pr-4 py-2 rounded-lg bg-[#FFFFFF33] text-white placeholder-white border border-gray-300 focus:border-yellow-400 outline-none transition"
              />
            </div>
          )}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6 relative">
          {links}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/3fQf6Gk/default-avatar.png"
                  }
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full border-2 border-yellow-400 cursor-pointer"
                  title={user.displayName || "User"}
                />
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button label="Login" />
            </Link>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 py-4 space-y-4 ${
            isHome ? "bg-black/90 text-white" : "bg-white text-black shadow"
          }`}
        >
          {isHome && (
            <input
              type="text"
              placeholder="Search your destination..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white outline-none focus:border-yellow-400 transition"
            />
          )}

          <div className="flex flex-col gap-3">{links}</div>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/3fQf6Gk/default-avatar.png"
                  }
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full border-2 border-yellow-400 cursor-pointer"
                  title={user.displayName || "User"}
                />
              </Link>
              <Button onClick={handleLogout} label="Log Out" />
            </div>
          ) : (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button label="Login" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
