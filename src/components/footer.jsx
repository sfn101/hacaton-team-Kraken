import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">Mobile Apps</a></li>
              <li><a href="#" className="hover:underline">Cloud Hosting</a></li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div className='flex flex-col justify-center items-center '>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.88v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5H15c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 3h-2.3v7A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.35 8.48 8.48 0 0 1-2.7 1.03 4.25 4.25 0 0 0-7.24 3.87A12.04 12.04 0 0 1 3 4.8a4.26 4.26 0 0 0 1.32 5.67 4.2 4.2 0 0 1-1.92-.53v.05c0 2.08 1.48 3.81 3.45 4.2a4.27 4.27 0 0 1-1.92.07 4.25 4.25 0 0 0 3.96 2.95A8.53 8.53 0 0 1 2 19.54a12.04 12.04 0 0 0 6.5 1.9c7.8 0 12.07-6.46 12.07-12.07 0-.18-.01-.36-.02-.54A8.59 8.59 0 0 0 22.46 6z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white" aria-label="LinkedIn">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 8.98h3.96V21H3V8.98zm7.45 0H14v1.6c.5-.95 1.74-1.95 3.6-1.95 3.85 0 4.56 2.53 4.56 5.8V21h-4v-5.8c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V21h-4V8.98z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-blue-500 pt-4 text-center text-sm text-blue-100">
          © {new Date().getFullYear()} Geeks Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
