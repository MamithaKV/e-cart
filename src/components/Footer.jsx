import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto w-full mt-5 bg-violet-800 text-gray-200 p-8" style={{ height: '289px' }}>
      <div className="flex justify-between">
        
        {/* Intro Section */}
        <div className="w-80">
          <h5 className="text-lg font-semibold flex items-center mb-2">
          <i className="fa-solid fa-truck-fast me-1"></i>E Cart
          </h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed VRTX, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        
        {/* Links Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-2">Links</h5>
          <a href="/" className="hover:text-teal-400">Landing Page</a>
          <a href="/home" className="hover:text-teal-400">Home Page</a>
          <a href="/history" className="hover:text-teal-400">Watch History Page</a>
        </div>
        
        {/* Guides Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-2">Guides</h5>
          <a href="https://react.dev/" target="_blank" className="hover:text-teal-400">React</a>
          <a href="https://reactrouter.com/en/main" target="_blank" className="hover:text-teal-400">React Router</a>
          <a href="https://react-bootstrap.github.io/" target="_blank" className="hover:text-teal-400">React Bootstrap</a>
        </div>
        
        {/* Contact Section */}
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold mb-2">Contact</h5>
          <div className="flex">
          <input 
             type="text" 
             placeholder="Enter Your Email"
             className="w-full p-2 bg-gray-700 text-gray-300 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-gray-800"
          />

            <button className="bg-teal-500 text-gray-900 p-2 rounded-r-md hover:bg-teal-400">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex space-x-4 mt-3">
            <a href="https://x.com/?lang=en" target="_blank" className="hover:text-teal-400"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://x.com/?lang=en" target="_blank" className="hover:text-teal-400"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/?lang=en" target="_blank" className="hover:text-teal-400"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/?lang=en" target="_blank" className="hover:text-teal-400"><i className="fa-brands fa-github"></i></a>
            <a href="https://x.com/?lang=en" target="_blank" className="hover:text-teal-400"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/?lang=en" target="_blank" className="hover:text-teal-400"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-5">
        © July Batch, E cart. Built With React Redux
      </p>
    </div>
  );
};

export default Footer;