import React from "react";
import { Link } from "react-router";
import  Logo  from "../../assets/Tuli_logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-lvh bg-wygBackgroundColor text-white flex flex-col gap-4 items-center">
      <div className="links  flex gap-10 justify-center  pt-56 py-4 font-light">
        <div className="socials">
          <div className="logo">
            <Link to={"/"}><img src={Logo} className="h-12 bg-white m-4"/></Link>
          </div>
          <div className="social-logo flex gap-2 m-4">
            <Link to={"https://www.facebook.com/"}>
              <FaFacebook />
            </Link>
            <Link to={"https://www.instagram.com/"}>
              <FaInstagramSquare />
            </Link>
            <Link to={"https://www.x.com/"}>
              <FaSquareXTwitter />
            </Link>
            <Link to={"https://www.linkedin.com/"}>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="features flex flex-col">
          <Link to={"/invoicing"}>Invoicing</Link>
          <Link to={"/estimates"}>Estimates</Link>
          <Link to={"/mobilereceipts"}>Mobile Receipts</Link>
          <Link to={"/payments"}>Payments</Link>
          <Link to={"/payroll"}>Payroll</Link>
          <Link to={"/advisors"}>Advisors</Link>
          <Link to={"/pricing"}>Pricing</Link>
        </div>
        <div className="wave flex flex-col">
          <Link to={"/aboutus"}>About Us</Link>
          <Link to={"/invoicing"}>Careers</Link>
        </div>
        <div className="helpful-links flex flex-col">
        <Link to={"/invoicing"}>Blog</Link>
        </div>
        <div className="helpful-tools flex flex-col">
          How it Works
        </div>
      </div>
      <div className="bar border w-11/12 bg-white"></div>
      <div className="legal flex flex-col gap-2 font-thin">
        <p>Copyright</p>
        <div className="legal-links flex gap-3">
        <Link to={"/invoicing"}>Privacy Policy </Link>
        <Link to={"/invoicing"}>Legal Disclosures</Link>
        <Link to={"/invoicing"}>Security</Link>
        <Link to={"/invoicing"}>Licencing</Link>
        <Link to={"/invoicing"}>Accessibility</Link>
        <Link to={"/invoicing"}>Social Media Disclaimer</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
