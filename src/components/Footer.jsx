import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-lg py-10" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Company Information */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 cursor-pointer hover:text-orange-400">
              <a href="/">QAIMAXA INFRA</a>
            </h2>
            <p className="mb-4">
            Qaimaxa Infra is a leading provider of construction services, offering premium materials and innovative solutions. We specialize in transforming the industry with unmatched expertise and reliability
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:bg-blue-500 border-2 border-white p-3 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:bg-blue-400 border-2 border-white p-3 rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/qaimaxa-infra"
                aria-label="LinkedIn"
                className="hover:bg-blue-600 border-2 border-white p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/qaimaxa_infra?igsh=bWY5bjhxdnA3a3Nx"
                aria-label="Instagram"
                className="hover:bg-pink-500 border-2 border-white p-3 rounded-full"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Products */}
          <div className="w-full md:w-1/3 px-3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="flex">
              <ul className="list-none mr-4 whitespace-nowrap ">
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-orange-400">
                  <Link to={`/product-detail/1`}>RMC</Link>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-orange-400">
                  <Link to={`/product-detail/3`}>Fly Ash</Link>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-orange-400">
                  <Link to={`/product-detail/4`}>Pond Ash</Link>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-orange-400">
                  <Link to={`/product-detail/2`}>Blocks</Link>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-orange-400">
                  <Link to={`/product-detail/5`}>Aggregates</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <a
              href="https://www.google.com/maps/place/QAIMAXA+LLP/@19.0399628,72.8393368,1472m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7c9d47a9b576b:0x5f8bfbcfe72fa863!8m2!3d19.0399577!4d72.8419117!16s%2Fg%2F11mctlrrdh?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <address className="not-italic mb-4 hover:text-orange-400 cursor-pointer">
              Aloo Paroo,Trust Building , 
                <br />
                Office no 5, 2nd Cross Lane, ,
                <br />
                Lady Jamshedji Rd,
                <br />
                Mahim West,
                <br />
                Mumbai, Maharashtra 400016
              </address>
            </a>

            <p className="mb-2">
              Phone:{" "}
              <a href="tel:+919819320999" className="hover:text-orange-400">
  +91 9819320999
</a>
            </p>
            <p className="mb-2">
              Mobile no:{" "}
              <a
                href="tel:+919321790831"
                className="hover:text-orange-400"
                
              >
                +91 9321790831
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@QAIMAXA INFRA"
                className="hover:text-orange-400"
              >
                info@QAIMAXA INFRA{" "}
              </a>
            </p>
          </div>
        </div>
        {/* Policy Links */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="mt-4">
            &copy; {new Date().getFullYear()} QAIMAXA LLP All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
3;
