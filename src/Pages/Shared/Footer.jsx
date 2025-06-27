import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        
        <div className="flex flex-col items-start space-y-3">
          <div className="flex items-center gap-3">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-indigo-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
            <span className="text-2xl font-bold text-white">Virtual Bookshelf</span>
          </div>
          <p className="text-gray-400">
            Bringing your favorite books closer to you.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📞 Phone: +880 1234 567890</li>
            <li>✉️ Email: support@virtualbookshelf.com</li>
            <li>📍 Address: 123 Book St, Dhaka, Bangladesh</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/terms"
                className="hover:text-indigo-500 transition-colors"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-indigo-500 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-indigo-500 transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Link */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-5">
            <a
              href="https://twitter.com/virtualbookshelf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.38 4.482A13.955 13.955 0 011.671 3.149 4.917 4.917 0 003.195 9.723a4.9 4.9 0 01-2.228-.616v.06a4.919 4.919 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.92 4.92 0 004.59 3.417 9.867 9.867 0 01-6.102 2.105c-.397 0-.79-.023-1.176-.067a13.936 13.936 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="https://facebook.com/virtualbookshelf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.243l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/virtualbookshelf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-indigo-500 transition-colors"
            >
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669h-3.554V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.271 2.373 4.271 5.456v6.285zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.073 0-1.145.927-2.073 2.07-2.073 1.146 0 2.073.928 2.073 2.073 0 1.145-.927 2.073-2.073 2.073zM6.765 20.452H3.91V9h2.855v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Virtual Bookshelf. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
