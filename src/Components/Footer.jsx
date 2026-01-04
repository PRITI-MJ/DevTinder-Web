import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-neutral-content items-center p-4 fixed bottom-0 w-full">
      
      {/* Left section */}
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..." />
        </svg>

        <p className="text-sm">
          Copyright © {new Date().getFullYear()} – All rights reserved
        </p>
      </aside>

      {/* Middle section – Policy links */}
      <nav className="flex gap-4 text-sm underline-offset-4">
        <Link
          to="/privacy-policy"
          className="hover:underline hover:text-white transition"
        >
          Privacy Policy
        </Link>

        <Link
          to="/refund-policy"
          className="hover:underline hover:text-white transition"
        >
          Refund Policy
        </Link>
      </nav>

      {/* Right section – Social icons */}
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className="hover:text-white transition cursor-pointer">
          {/* Twitter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392..." />
          </svg>
        </a>

        <a className="hover:text-white transition cursor-pointer">
          {/* YouTube */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604..." />
          </svg>
        </a>

        <a className="hover:text-white transition cursor-pointer">
          {/* Facebook */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4..." />
          </svg>
        </a>
      </nav>

    </footer>
  );
};

export default Footer;
