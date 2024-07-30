import React, { useState } from "react";
import { navLinks } from "../constants/index";
import { FaSearch, FaUser, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as RouterLink } from "react-router-dom"; // Alias Link from react-router-dom
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; // Alias Link from react-scroll

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
};

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)"); // Adjust the max-width to fit your breakpoints

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setOpenNavigation(!openNavigation);
  };

  // Function to handle link clicks and scroll to sections
   const handleLinkClick = (event) => {
    setOpenNavigation(false);
    // Smooth scroll to section
    const section = document.querySelector(event.target.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to toggle the visibility of the search panel
  const toggleSearchPanel = () => {
    setShowSearchPanel(!showSearchPanel);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-black z-[1000] py-8 px-[7%]">
      <nav className="flex justify-between items-center">
        <a
          href="/"
          className="text-white font-extrabold text-[2.15rem] whitespace-nowrap"
        >
          <span className="text-[#0080ff]">W</span>orld{" "}
          <span className="text-[#0080ff]">W</span>ide
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-1 justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <ScrollLink
                to={link.href} // Ensure href corresponds to section ID
                smooth={true}
                duration={500}
                onClick={handleLinkClick} // Optional if you want to handle link clicks
                className="text-[20px] text-white mx-[15px] transition-custom hover:text-[#0080ff] whitespace-nowrap cursor-pointer"
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-6 cursor-pointer lg:hidden">
          <div className="relative">
            {showSearchPanel ? (
              <FaTimes
                size={30}
                className="transition-custom text-white hover:text-red-600 cursor-pointer"
                onClick={toggleSearchPanel} // Closes the search panel
              />
            ) : (
              <FaSearch
                size={30}
                className="transition-custom text-white hover:text-[#0080ff] cursor-pointer"
                onClick={() => {
                  if (isMobile) {
                    toggleSearchPanel(); // Opens the search panel
                  }
                }}
              />
            )}
          </div>
          <GiHamburgerMenu
            size={30}
            className="text-white transition-custom hover:text-[#0080ff] cursor-pointer"
            onClick={toggleMenu} // Toggles the mobile menu
          />
        </div>

        {/* User and Search Icons for Large Screens */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search Icon with Toggle Functionality */}
          <div onClick={toggleSearchPanel} className="relative">
            {showSearchPanel ? (
              <FaTimes
                size={30}
                className="transition-custom text-white hover:text-red-600 cursor-pointer"
              />
            ) : (
              <FaSearch
                size={30}
                className="transition-custom text-white hover:text-[#0080ff] cursor-pointer"
              />
            )}
            {/* Conditional Rendering for Search Panel */}
            {showSearchPanel && (
              <div
                className="fixed left-0  bg-black transition-custom px-10 py-4 z-[1001] w-full"
                onClick={() => toggleSearchPanel()} // This toggles the search panel when clicking outside
              >
                <div className="p-4" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="text"
                    placeholder="What are you looking for"
                    className="bg-white border-none p-3 w-full rounded text-black"
                  />
                </div>
              </div>
            )}
          </div>
          <RouterLink to="/login">
            <FaUser
              size={30}
              className="transition-custom text-white hover:text-[#0080ff]"
            />
          </RouterLink>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-[250px] h-full bg-black text-white transition-transform duration-300 ease-in-out ${
            openNavigation ? "translate-x-0" : "translate-x-full"
          } lg:hidden flex flex-col z-[1001]`} // Ensure z-index is higher
        >
          <div className="flex justify-between items-center p-10">
            <h2 className="text-xl font-bold">Menu</h2>
            <FaTimes
              size={30}
              className="text-white transition-custom hover:text-red-600 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col items-center justify-start mt-8 gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full text-center">
                <ScrollLink
                  to={link.href} // Ensure href corresponds to section ID
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick} // Optional if you want to handle link clicks
                  className="text-[20px] mx-[10px] transition-custom hover:text-[#0080ff] whitespace-nowrap block cursor-pointer"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center mt-auto mb-6 gap-6 cursor-pointer">
            <RouterLink to="/login">
              <button className="py-4 px-12 bg-[hsl(216,100%,51%)] text-white rounded-[8px] mx-12 transition-custom hover:bg-[hsl(216,100%,46%)]">
                Log in
              </button>
            </RouterLink>
          </div>
        </div>
      </nav>

      {/* Mobile Search Panel */}
      {showSearchPanel && isMobile && (
        <div className="fixed left-0  bg-black text-white transition-custom px-10 py-4 z-[1001] w-full">
          <div className="p-4">
            <input
              type="text"
              placeholder="What are you looking for"
              className="bg-white border-none p-3 w-full rounded text-black"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
