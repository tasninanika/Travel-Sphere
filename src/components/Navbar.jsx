import { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(FirebaseAuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-400";

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
    <nav className="w-full bg-white shadow text-black">
      {/* Full width but aligned with hero/sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Search Box (hidden on mobile) */}
        <div className="flex-1 mx-6 max-w-md hidden md:block">
          <input
            type="text"
            placeholder="Search your destination..."
            className="w-full px-4 py-2 rounded-lg text-black border border-gray-300 focus:border-yellow-400 outline-none transition"
          />
        </div>

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
        <div className="md:hidden bg-black text-white px-4 py-4 space-y-4">
          <input
            type="text"
            placeholder="Search your destination..."
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 outline-none focus:border-yellow-400 transition"
          />
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
