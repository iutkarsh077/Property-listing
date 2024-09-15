import Switch from "./Switch";
import { useEffect, useState } from "react";
import logo from '../assets/propertyLogo.png'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  // Show navbar with animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`shadow-xl bg-gray-200 ml-16 mr-16 hover:scale-x-105 rounded-xl mt-6 border-gray-200 dark:bg-gray-900 transition-transform duration-700 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse transition-all duration-300 transform hover:scale-105"
        >
          <img
            src={logo}
            className="h-12 transition-transform duration-300 transform hover:rotate-6"
            alt="property logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition-colors duration-300 hover:text-purple-600">
            My Property
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <Switch label="" />
        </div>
      </div>
    </nav>
  );
}
