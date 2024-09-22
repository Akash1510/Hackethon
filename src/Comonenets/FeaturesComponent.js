import React from 'react';

const FeatureComponent = () => {
    const features = [
        {
            id: 1,
            title: 'AI-Powered Disease Prediction',
            description: 'Utilize advanced machine learning algorithms to predict crop diseases in real-time.',
            imgUrl: 'https://agrio.app/wp-content/uploads/2019/11/Group-12.png',
            gradientFrom: 'from-blue-500',
            gradientTo: 'to-blue-700',
        },
        {
            id: 2,
            title: 'Real-Time Alerts',
            description: 'Get instant notifications and alerts about potential disease outbreaks.',
            imgUrl: 'https://static.vecteezy.com/system/resources/previews/009/315/292/original/3d-megaphone-speaker-or-loudspeaker-bullhorn-for-announce-promotion-megaphone-loudhailer-with-microphone-mockup-speakerphone-3d-render-for-alert-and-announcement-isolated-free-png.png',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-green-700',
        },
        {
            id: 3,
            title: 'Preventive Measures',
            description: 'Receive actionable recommendations and preventive measures based on disease predictions.',
            imgUrl: 'https://cdni.iconscout.com/illustration/free/thumb/crop-monitoring-via-mobile-device-5005095-4161870.png',
            gradientFrom: 'from-indigo-500',
            gradientTo: 'to-indigo-700',
        },
        {
            id: 4,
            title: 'Weather Outlook',
            description: 'Provides daywise and hour-wise forecasting to help plant growth.',
            imgUrl: 'https://static.vecteezy.com/system/resources/previews/008/854/789/original/sunny-and-rainy-cloudy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-green-700',
        },
        {
            id: 5,
            title: 'Multilingual',
            description: 'Access the app in multiple languages to reach a broader audience and improve accessibility.',
            imgUrl: 'https://cdn-icons-png.flaticon.com/512/860/860833.png',
            gradientFrom: 'from-blue-500',
            gradientTo: 'to-blue-700',
        },
        {
            id: 6,
            title: 'Agronomist Support',
            description: 'Provides expert recommendations on crop disease by environmental data and predicted disease severity.',
            imgUrl: 'https://cdn2.iconfinder.com/data/icons/human-6-1/48/263-512.png',
            gradientFrom: 'from-green-500',
            gradientTo: 'to-green-700',
        },
    ];

    return (
        <section
            id="features"
            className="py-20"
            style={{
                backgroundImage: 'linear-gradient(to bottom right, #e0f7fa, #e1bee7)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-semibold mb-16 text-gray-800">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:translate-y-1 transition-transform duration-300"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} opacity-20 rounded-lg`}
                            ></div>
                            <img
                                src={feature.imgUrl}
                                alt={feature.title}
                                className="w-24 h-24 mx-auto mb-4 relative object-contain animate-fade-in"
                            />
                            <h3 className="text-lg font-semibold mb-2 relative">{feature.title}</h3>
                            <p className="relative text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureComponent;
