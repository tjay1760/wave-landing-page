import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import Logo from '../../assets/Tuli_logo.png'; // Adjust the path as needed



const Navbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showResources, setShowResources] = useState(false);

  return (
    <div className="bg-heroBackgroundColor h-24 w-full flex items-center gap-[400px] px-8 fixed">
      <Link to="/">
      <img src={Logo} alt="Logo" className="h-20"/>
      </Link>
      <nav className="flex gap-6">
        {/* Features Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => {setShowFeatures(true) 
            setShowResources(false)}}
          //   onMouseLeave={() => setShowFeatures(false)}
        >
          <button className="text-blue-900 font-extrabold hover:text-blue-500 flex items-center gap-2">
            Features {showFeatures?<IoIosArrowDown/>:<IoIosArrowUp/>}
          </button>
          {showFeatures && (
            <div
              className="absolute grid grid-cols-2 z-10 bg-heroBackgroundColor border border-blue-300 shadow-md rounded-md mt-4 w-[512px] h-80 py-4 px-8 transition ease-out delay-75 hover:scale-105"
              onMouseEnter={() => setShowFeatures(true)}
              onMouseLeave={() => setShowFeatures(false)}
            >
              <div>
                <Link
                  to="/invoicing"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Invoicing
                </Link>
                <p className="text-sm text-gray-500">Look like a pro</p>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/mobilepayments"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Mobile receipts
                </Link>
                <p className="text-sm text-gray-500">Ditch the shoebox</p>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              {/* Add remaining features */}
              <div>
                <Link
                  to="/mobilepayments"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Payments
                </Link>
                <p className="text-sm text-gray-500">Get paid faster</p>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/mobilepayments"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Payroll
                </Link>
                <p className="text-sm text-gray-500">Pay Staff in minutes</p>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/mobilepayments"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Accounting
                </Link>
                <p className="text-sm text-gray-500">Advisors</p>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/mobilepayments"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Estimates
                </Link>
                <p className="text-sm text-gray-500">
                  Land than dream customer
                </p>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
            </div>
          )}
        </div>

        <Link
          to="/pricing"
          className="text-blue-900 font-extrabold hover:text-blue-500"
        >
          Pricing
        </Link>
        <Link
          to="/blog"
          className="text-blue-900 font-extrabold hover:text-blue-500"
        >
          Blog
        </Link>

        {/* Resources Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => {setShowResources(true)
            setShowFeatures(false)}
          }
        >
          <button className="text-blue-900 font-extrabold hover:text-blue-500 flex items-center gap-2">
            Resources
{showResources?<IoIosArrowDown/>:<IoIosArrowUp/>}
          </button>
          {showResources && (
            <div
              className="absolute flex flex-col z-10 bg-heroBackgroundColor border border-blue-300 shadow-md rounded-md mt-4 w-52 min-h-0 py-4 px-8 transition ease-out delay-75 hover:scale-105"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <div>
                <Link
                  to="/about"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  About Us
                </Link>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/careers"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Careers
                </Link>
                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/howsupportworks"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  How Support Works
                </Link>

                <div className="w-36 h-px bg-blue-300 mt-2"></div>
              </div>
              <div>
                <Link
                  to="/affiliate"
                  className="block px-2 py-1 font-semibold text-blue-900 hover:text-blue-500"
                >
                  Become an Affiliate
                </Link>
              </div>
                </div>
          )}
        </div>
        <button className="ml-44 h-10 px-5 text-white font-semibold transition-colors duration-150 bg-blue-900 rounded-full focus:shadow-outline hover:bg-blue-700">Join Waiting List</button>
              </nav>

    </div>
  );
};

export default Navbar;
