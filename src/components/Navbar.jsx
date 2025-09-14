import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
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
      {user && (
        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
      )}
    </>
  );

  const handleLogout = () => {
    logOutUser()
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <nav
      className={`w-full z-50 ${
        isHome
          ? "absolute top-0 left-0 text-white"
          : "bg-white shadow text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={isHome ? logo1 : logo} alt="Logo" className="w-24" />
        </div>

        {/* Search Box (Home page only) */}
        {isHome && (
          <div className="flex-1 mx-6 max-w-md hidden md:block">
            <input
              type="text"
              placeholder="Search your destination..."
              className="w-full px-4 py-2 rounded-lg text-white border border-gray-300 focus:border-yellow-400 outline-none transition bg-[#FFFFFF33]"
            />
          </div>
        )}

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {links}
          {user ? (
            <Button onClick={handleLogout} label="Log Out" />
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

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden px-4 py-4 space-y-4 ${
            isHome ? "bg-black/90 text-white" : "bg-white text-black shadow"
          }`}
        >
          {/* Mobile search (Home page only) */}
          {isHome && (
            <input
              type="text"
              placeholder="Search your destination..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 text-white outline-none focus:border-yellow-400 transition"
            />
          )}

          <div className="flex flex-col gap-3">{links}</div>

          {user ? (
            <Button onClick={handleLogout} label="Log Out" />
          ) : (
            <Link to="/login">
              <Button label="Login" />
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
