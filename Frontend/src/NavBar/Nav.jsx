import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { asynclogout } from "../Store/Useractions/useraction";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const LoginUser = localStorage.getItem("user");

  const isAdmin = user?.admin;

  const linkClass =
    "block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-amber-300 hover:text-gray-900";

  return (<div className="p-4">
    <nav className="bg-amber-100 text-black rounded-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
                <img src={logo} alt="MyShop Logo" className="w-[8%]  object-cover " />

          {/* <div className="text-xl font-bold">MyApp</div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`}>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`}>
              Products
            </NavLink>
            {isAdmin && (
              <>
                <NavLink to="create-product" className={({ isActive }) => `${linkClass} ${isActive ? "bg-amber-400" : ""}`}>
                  Create Product
                </NavLink>
                <NavLink to="/updateproduct" className={({ isActive }) => `${linkClass} ${isActive ? "bg-amber-400" : ""}`}>
                  Update Products
                </NavLink>
              </>
            )}
            <NavLink to="/cart" className={({ isActive }) => `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`}>
              Cart
            </NavLink>
            {LoginUser ? (
              <button onClick={() => dispatch(asynclogout())} className={linkClass}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" className={({ isActive }) => `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`}>
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-amber-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)} className={linkClass}>
            Products
          </NavLink>
          {isAdmin && (
            <NavLink to="/create-product" onClick={() => setIsOpen(false)} className={linkClass}>
              Create Product
            </NavLink>
          )}
          <NavLink to="/cart" onClick={() => setIsOpen(false)} className={linkClass}>
            Cart
          </NavLink>
          {LoginUser ? (
            <button onClick={() => dispatch(asynclogout())} className={linkClass}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" onClick={() => setIsOpen(false)} className={linkClass}>
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
    </div>
  );
};

export default Nav;
