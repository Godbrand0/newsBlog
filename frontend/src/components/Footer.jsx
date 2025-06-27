import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Naija news hub</h2>
        <div>
          <p>Follow us on Social Media</p>
          <div>
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
            <FaLinkedinIn size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}
