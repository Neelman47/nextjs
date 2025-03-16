import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import icons

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-200 to-rose-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About us", "Contact us", "Login", "Signup"].map((item, idx) => (
                <li key={idx}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                    <span className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="lg:border-l-2 lg:pl-6 border-gray-400">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-sm leading-relaxed">
              We provide top-notch web solutions to help businesses grow in the digital world. 
              Our team is dedicated to innovation and customer satisfaction.
            </p>
          </div>

          {/* Social Media */}
          <div className="lg:border-l-2 lg:pl-6 border-gray-400">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#">
                <Facebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
              </Link>
              <Link href="#">
                <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
              </Link>
              <Link href="#">
                <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
              </Link>
              <Link href="#">
                <Linkedin className="w-6 h-6 hover:text-blue-700 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:border-l-2 lg:pl-6 border-gray-400">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">📍 22 Neel Complex, Example Road, Vadodara, Gujarat</p>
            <p className="text-sm">📧 Email: abc@test.com</p>
            <p className="text-sm">📞 Phone: +91 12345 67890</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} Neel Shah. All rights reserved.
      </div>
    </footer>
  );
}
