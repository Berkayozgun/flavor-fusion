import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  const [isHovered, setIsHovered] = useState("");

  const navItems = [
    { name: "Menu", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className='bg-primary text-text shadow-md'>
      <nav className='container mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center space-x-2 group'>
            <img
              className='h-10 cursor-pointer transition-transform duration-300 group-hover:scale-110'
              src='https://www.svgrepo.com/show/399602/restaurant.svg'
              alt='Flavor Fusion Logo'
            />
            <span className='font-bold text-xl group-hover:text-accent transition-colors duration-300'>
              Flavor Fusion
            </span>
          </Link>
        </div>
        <div className='space-x-6 flex items-center'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={`text-text hover:text-accent transition duration-300 ${
                isHovered === item.name ? "border-b-2 border-accent" : ""
              }`}
              to={item.path}
              onMouseEnter={() => setIsHovered(item.name)}
              onMouseLeave={() => setIsHovered("")}
            >
              {item.name}
            </Link>
          ))}
          <Link
            className='text-text hover:text-accent transition duration-300 flex items-center space-x-1'
            to='/cart'
            onMouseEnter={() => setIsHovered("Cart")}
            onMouseLeave={() => setIsHovered("")}
          >
            <FaShoppingCart
              className={`${isHovered === "Cart" ? "animate-bounce" : ""}`}
            />
            <span>Cart</span>
          </Link>
          <span className='bg-accent text-white font-bold py-1 px-3 rounded-full transition-all duration-300 hover:bg-opacity-80'>
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
