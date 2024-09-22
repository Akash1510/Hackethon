import React from 'react';
import './Works.css';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'Data Input',
            description: 'Upload crop images and environmental data.',
            imgUrl: 'https://cdn-icons-png.flaticon.com/512/188/188317.png',
            gradientFrom: 'from-blue-500',
            gradientTo: 'to-blue-700',
        },
        {
            id: 2,
            title: 'AI Analysis',
            description: 'AI processes data to detect disease patterns.',
            imgUrl: 'https://static.vecteezy.com/system/resources/previews/022/587/498/non_2x/technology-ai-artificial-intelligence-ship-in-brain-hi-tech-smart-brain-free-png.png',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-green-700',
        },
        {
            id: 3,
            title: 'Disease Detection',
            description: 'Receive predictions of detected diseases.',
            imgUrl: 'https://www.folio3.ai/wp-content/uploads/2021/06/circular-img-3-1-469x469.png',
            gradientFrom: 'from-indigo-500',
            gradientTo: 'to-indigo-700',
        },
        {
            id: 4,
            title: 'Detected Disease Info',
            description: 'Detailed information about the disease.',
            imgUrl: 'https://cdn-icons-png.flaticon.com/512/181/181549.png',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-green-700',
        },
        {
            id: 5,
            title: 'Treatment Solutions',
            description: 'Offers organic and chemical solutions.',
            imgUrl: 'https://cdn-icons-png.flaticon.com/512/1632/1632602.png',
            gradientFrom: 'from-blue-500',
            gradientTo: 'to-blue-700',
        },
        {
            id: 6,
            title: 'Solution Descriptions',
            description: 'Details for implementation and materials required.',
            imgUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-green-700',
        }
      
    ];

    return (
        <section id="how-it-works" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-16 text-gray-800">How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map(step => (
                        <div
                            key={step.id}
                            className="relative bg-white h-64 w-full p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:translate-y-1 transition-transform duration-300"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} opacity-20 rounded-lg`}
                            ></div>
                            <img
                                src={step.imgUrl}
                                alt={step.title}
                                className="w-24 h-24 mx-auto mb-4 relative object-contain animate-fade-in"
                            />
                            <h3 className="text-lg font-semibold mb-2 relative">{step.title}</h3>
                            <p className="relative text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
