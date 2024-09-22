import React, { useState } from 'react';

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "What is AI-Driven Crop Disease Prediction?",
            answer: "AI-Driven Crop Disease Prediction uses advanced machine learning algorithms to analyze crop images and environmental data. It predicts potential crop diseases and provides actionable insights to help farmers take preventive measures."
        },
        {
            question: "How does the system work?",
            answer: "To use the system, upload images of your crops and any relevant environmental data. Our AI engine analyzes this data to identify patterns that may indicate disease. It then provides predictions and recommendations for managing or preventing diseases."
        },
        {
            question: "Is my data secure with this system?",
            answer: "Yes, we prioritize data security. All data is encrypted and stored securely. We also adhere to strict data privacy policies to ensure your information is protected."
        },
        {
            question: "Can I use this system on mobile devices?",
            answer: "Yes, our system is fully responsive and can be accessed on mobile devices, tablets, and desktops. You can manage and analyze your crop data from anywhere."
        },
        {
            question: "What kind of support is available?",
            answer: "We offer comprehensive support through our help center, including tutorials, user guides, and FAQs. If you need further assistance, our support team is available via email or phone to help resolve any issues."
        },
        {
            question: "How do I get started?",
            answer: "Getting started is easy! Simply sign up for an account on our website, download our app, and follow the onboarding instructions to upload your crop images and environmental data. You’ll receive immediate insights and recommendations based on your inputs."
        }
    ];

    return (
        <section id="faq" className="bg-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {questions.map((item, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            <button
                                aria-expanded={activeIndex === index}
                                className="faq-title flex items-center justify-between w-full text-left font-semibold text-xl relative"
                                onClick={() => toggleFAQ(index)}
                            >
                                {item.question}
                                <svg className={`w-6 h-6 transition-transform duration-300 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`faq-content mt-4 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQComponent;
