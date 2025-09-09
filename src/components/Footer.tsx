import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Hotel className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">StayEase</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Find your perfect stay with our curated selection of hotels and resorts worldwide.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400">Home</Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-indigo-400">Search Hotels</Link>
              </li>
              <li>
                <Link to="/bookings" className="text-gray-400 hover:text-indigo-400">My Bookings</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">Special Offers</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">Cancellation Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">COVID-19 Updates</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">123 Hotel Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">support@stayease.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} StayEase. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <img src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Payment methods" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
