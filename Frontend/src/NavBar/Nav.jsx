import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = useSelector(({ user }) => user);
  
  const { product } = useSelector(({ product }) => product);
console.log(product);


  const isAdmin = user[0]?.admin; // ✅ safe way
  // console.log(isAdmin);

  const linkClass =
    "block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-amber-300 hover:text-gray-900";

  return (
    <nav className="bg-amber-100 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="text-xl font-bold">MyApp</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
              }
            >
              Products
            </NavLink>
            {isAdmin &&<>

            <NavLink
              to={"create-product"}
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-amber-400" : ""}`
              }
            >
              Create Product
            </NavLink>
            </>}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
              }
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-amber-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
            }
          >
            Products
          </NavLink>
{isAdmin&&<>

          <NavLink
            to={"/create-product"}
            //  onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-amber-400" : ""}`
            }
          >
            Create Product
          </NavLink>
</>}

          <NavLink
            to="/cart"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? "bg-amber-400 font-semibold" : ""}`
            }
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
