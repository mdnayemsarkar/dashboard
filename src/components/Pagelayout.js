// components/WebsiteLayout.js

import React from 'react';

const WebsiteLayout = () => {
  return (
    <div className="bg-gray-100 font-sans">

      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-6">

        {/* Hero Section */}
        <section className="bg-gray-200 py-12 px-4 md:px-0">
            <div className='h-44 w-44 bg-red-500 relative left-36 '>
                <div className='h-24 w-24 bg-green-700 absolute left-12 top-5'></div>
            </div>
 
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
              <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus fermentum eros vitae lobortis.</p>
              <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Get Started</button>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="https://via.placeholder.com/600x400" alt="Placeholder Image" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 md:px-0">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Feature 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Feature 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Feature 3</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default WebsiteLayout;
