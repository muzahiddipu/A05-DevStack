import logo from "../assets/logo-text.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 flex flex-col items-center text-center sm:col-span-3 lg:col-span-1 lg:items-start lg:text-left">
            <a href="#" aria-label="Dev Stack home">
              <img src={logo} alt="Dev Stack" className="h-10 w-auto" />
            </a>

            <p className="mx-auto mt-4 max-w-sm text-[15px] leading-7 text-slate-500 lg:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-semibold lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
              >
                <FaGithub aria-hidden="true" />
                GitHub
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
              >
                <FaTwitter aria-hidden="true" />
                Twitter
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-slate-600 transition hover:text-pink-500"
              >
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden md:block">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <ul className="mt-7 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="hidden md:block">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <ul className="mt-7 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="hidden md:block">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <ul className="mt-7 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[15px] text-slate-500 transition hover:text-slate-900"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-row items-center justify-between gap-3 border-t border-slate-200 pt-6 sm:mt-14 sm:pt-8">
          <p className="text-xs text-slate-400 sm:text-sm">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex shrink-0 gap-4 text-xs text-slate-400 sm:gap-8 sm:text-sm">
            <a href="#" className="transition hover:text-slate-800">
              Privacy
            </a>

            <a href="#" className="transition hover:text-slate-800">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
