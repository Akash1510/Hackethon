import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const IntroSection = () => {


    return (
        <>
        <section className="bg-gradient-to-br from-green-500 to-green-700 text-white py-24 relative overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
                {/* Left side content */}
                <div className="md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-5xl font-extrabold mb-6 transform transition-all duration-700 ease-out md:hover:translate-x-1 animate-fade-in">
                        AI-Driven Crop Disease Prediction & Management
                    </h1>
                    <p className="text-xl mb-8 text-gray-200 transform transition-all duration-700 ease-out md:hover:translate-y-1 animate-fade-in">
                        Accurately predict and manage crop diseases with real-time AI-driven insights to secure your crops' future.
                    </p>
                    {/* Using Link component instead of href */}
                    <Link
                        to="/uploadImage"
                        className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-semibold transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-100 shadow-lg"
                    >
                        Get Started for Free
                    </Link>
                </div>

                {/* Right side: Crop monitoring illustration */}
                <div className="md:w-1/2 flex justify-center z-10">
                    <img
                        src="https://eos.com/wp-content/uploads/2023/07/intro-web.png"
                        alt="AI Crop Analysis"
                        className="w-full md:w-auto transform transition-all duration-700 ease-out hover:scale-110 animate-fade-in"
                    />
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-green-300 rounded-full filter blur-3xl opacity-50 transform -translate-x-16 -translate-y-16 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-500 rounded-full filter blur-3xl opacity-50 transform translate-x-16 translate-y-16 animate-pulse"></div>
        </section>
        </>
    );
};

export default IntroSection;
