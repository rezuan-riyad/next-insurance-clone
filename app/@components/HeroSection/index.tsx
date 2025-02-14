import React from 'react';
import img from './image1.webp'
import Image from 'next/image';

const items = [
    {
        title: "General Liability",
        description: 'Protects your business from lawsuits and financial liabilities.',
    },
    {
        title: "Worker's Compensation",
        description: 'Covers medical costs and lost wages for employees injured on the job.',
    },
    {
        title: "Business Owner's Policy",
        description: "Combines general liability and property insurance into one policy.",
    },
    {
        title: "Professional Liability",
        description: "Protects your business from lawsuits related to professional services.",
    }
]

const HeroSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 mt-[80px]">
                <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
                    We are entirely focused on serving small businesses
                </h1>
                <h2 className="text-xl text-center text-gray-600 mb-8">
                    Tailored business insurance. Zero hassle. Big savings.
                </h2>
                <p className="mb-6 text-center mt-4">Choose your primary coverage to get started:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                    >
                    <Image src={img} alt={item.title} width={200}  className='mx-auto'/>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h4>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Get a Quote
                    </button>
                    </div>
                ))}
                </div>
                </div>
        </section>
    );
};

export default HeroSection;