import React, { useState } from 'react';
// import { FaPhone } from 'react-icons/fa';
import cameraIcon from '../Assests/camera.png';
import uploadIcon from '../Assests/upload-file.png';
import languageIcon from '../Assests/languages.png';
import magnifyingGlassIcon from '../Assests/magnifying-glass.png';
import phoneIcon from '../Assests/phone-call.png';

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [language, setLanguage] = useState('English');
    const [recommendations, setRecommendations] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleCameraUpload = () => {
        alert('Camera functionality is not implemented yet!');
    };

    const handleDetectDiseases = () => {
        setRecommendations('Based on the analysis, the following diseases are detected...');
    };

    return (
        <div className="min-h-screen py-10" style={{ background: 'linear-gradient(to bottom, #f0e9d7, #e6f7f2)' }}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#4c8067' }}>Upload Crop Image</h2>

                <div className="flex flex-col items-center justify-center space-y-6 md:space-y-0">
                    {/* Combined Upload Section */}
                    <div className="flex flex-col bg-white rounded-3xl shadow-lg p-6 w-full md:w-2/3 lg:w-1/2 transition-transform hover:scale-105 duration-300"
                        style={{ border: '2px solid #c4e3d5', background: 'rgba(255, 255, 255, 0.9)' }}>

                        {/* Upload from System */}
                        <div className="flex flex-col items-center mb-6">
                            <h3 className="text-xl font-semibold mb-4" style={{ color: '#4c8067' }}>Upload from System</h3>

                            <div className="relative w-full">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    id="file-upload"
                                    className="hidden"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer bg-teal-600 text-white rounded-full px-4 py-2 flex items-center justify-center hover:bg-teal-700 transition duration-200 w-full text-center"
                                >
                                    <img src={uploadIcon} alt="upload" className="mr-2 w-5 h-5" /> Choose Image
                                </label>
                            </div>
                        </div>

                        {/* Use Camera */}
                        <div className="flex flex-col items-center border-t pt-4">
                            <h3 className="text-xl font-semibold mb-4" style={{ color: '#4c8067' }}>Use Camera</h3>
                            <button
                                onClick={handleCameraUpload}
                                className="bg-teal-600 text-white rounded-full px-4 py-2 flex items-center hover:bg-teal-700 transition duration-200">
                                <img src={cameraIcon} alt="camera" className="mr-2 w-5 h-5" /> Open Camera
                            </button>
                        </div>

                        {/* Detect Crop Diseases - Centered */}
                        <div className="flex flex-col items-center mt-6">
                            <button
                                onClick={handleDetectDiseases}
                                className="bg-teal-600 text-white rounded-full px-4 py-2 flex items-center justify-center hover:bg-teal-700 transition duration-200 text-center w-full md:w-2/3 lg:w-1/2">
                                <img src={magnifyingGlassIcon} alt="detect" className="mr-2 w-5 h-5" /> Detect Crop Diseases
                            </button>
                        </div>

                        {/* Display Uploaded Image */}
                        {selectedImage && (
                            <img src={selectedImage} alt="Selected" className="mt-4 w-full h-auto rounded-lg shadow-md" />
                        )}
                    </div>
                </div>

                {/* Recommendations Section */}
                <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 transition-all hover:shadow-xl animate-fade-in"
                    style={{ border: '2px solid #c4e3d5', background: 'rgba(255, 255, 255, 0.9)' }}>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#4c8067' }}>Recommendations</h3>
                    <textarea
                        value={recommendations}
                        readOnly
                        rows="4"
                        className="border border-gray-300 rounded-lg p-2 w-full animate-fade-in"
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <label className="mr-2">Language:</label>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2"
                            >
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Spanish">Spanish</option>
                            </select>
                            <img src={languageIcon} alt="language" className="ml-2 w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Call Agronomist Section */}
                <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 text-center transition-transform hover:scale-105 duration-300 animate-fade-in"
                    style={{ border: '2px solid #c4e3d5', background: 'rgba(255, 255, 255, 0.9)' }}>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: '#4c8067' }}>Need Expert Advice?</h3>
                    <p className="mb-4">Contact our agronomists for personalized solutions.</p>
                    <button className="bg-teal-600 text-white rounded-full px-4 py-2 flex items-center justify-center mx-auto hover:bg-teal-700 transition duration-200">
                        <img src={phoneIcon} alt="phone" className="mr-2 w-5 h-5" /> Call Agronomist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
