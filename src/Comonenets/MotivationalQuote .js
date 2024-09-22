import React from 'react';

const MotivationalQuote = () => {
    return (
        <section id="motivational-quote" className="bg-gradient-to-b from-green-100 to-yellow-100 py-20">
            <div className="container mx-auto text-center">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    {/* Glorifying Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="bg-gradient-to-r from-green-300 to-yellow-200 opacity-50 w-96 h-96 rounded-full absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="bg-gradient-to-r from-yellow-200 to-green-300 opacity-50 w-80 h-80 rounded-full absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"></div>
                    </div>

                    {/* Quote Text */}
                    <h2 className="text-3xl font-bold text-gray-700 mb-4">
                        "To forecast and guard, with insight so sharp, ensures our crops will never be harmed."
                    </h2>
                    <p className="text-lg text-gray-500 mb-8">- Dr. Gary A. Chastagner, Plant Pathologist</p>

                    {/* CTA Button */}
                    <a
                        href="#how-it-works"
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
                    >
                        Start Growing
                    </a>
                </div>
            </div>
        </section>
    );
};

export default MotivationalQuote;
