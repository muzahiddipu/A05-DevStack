import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo-text.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Technologies", href: "#technologies" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    /* Sticky Top Header */
    <header className="sticky top-0 z-50 w-full bg-base-100/80 backdrop-blur-md border-b border-base-200 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Mobile Hamburger Menu (Dropdown) */}
        <div className="md:hidden dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-2xl hover:bg-base-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <GiHamburgerMenu />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-4 my-2 shadow-2xl bg-base-100 rounded-box w-64 z-50 border border-base-200 gap-2"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-base py-2.5 hover:text-primary transition-colors rounded-lg"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="divider my-1"></div>
            <div className="flex flex-col gap-2 pt-1 sm:hidden">
              <button className="btn btn-ghost btn-sm w-full">Sign In</button>
              <button className="btn-brand btn-sm w-full">Sign Up</button>
            </div>
          </ul>
        </div>

        {/* Center/Left: Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform active:scale-95"
        >
          <img
            src={logo}
            alt="Navbar Logo"
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 font-medium text-base-content/80">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative py-1 hover:text-primary transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0  after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Auth Buttons with Custom Gradient */}
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm sm:btn-md font-semibold hover:bg-base-200 transition-all duration-200">
            Sign In
          </button>

          {/* Main Call To Action Button with Gradient */}
          <button className="btn-brand btn-sm sm:btn-md shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
