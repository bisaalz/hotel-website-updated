import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="hidden lg:block nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700 px-4">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 mx-auto 2xl:px-16">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Link
              className="ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 w-24"
              href="/chisfis/"
            >
              Leetel
            </Link>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <div
              className="nc-SocialsList1 flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start"
              data-nc-id="SocialsList1"
            >
              <Link
                href="#"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <FaFacebookSquare />
                <span className="hidden lg:block text-sm">Facebook</span>
              </Link>
              <Link
                href="#"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <FaTwitter />
                <span className="hidden lg:block text-sm">Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <FaYoutube />
                <span className="hidden lg:block text-sm">Youtube</span>
              </Link>
              <Link
                href="#"
                className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
              >
                <FaInstagram />
                <span className="hidden lg:block text-sm">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Getting started
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Installation
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Release Notes
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Upgrade Guide
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Browser Support
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Editor Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Explore
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Design features
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Prototyping
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Design systems
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Resources
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Best practices
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Learn design
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Releases
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
            Community
          </h2>
          <ul className="mt-5 space-y-4">
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Discussion Forums
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Community Resources
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Contributing
              </Link>
            </li>
            <li>
              <Link
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href="#"
              >
                Concurrent Mode
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
