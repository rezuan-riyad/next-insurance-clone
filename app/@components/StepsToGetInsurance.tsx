import React from 'react';
import Image from 'next/image';

const StepsToGetInsurance = () => {
    const steps = [
        {
            number: 1,
            title: "Tell Us What You Do",
            description: "Share details about your business and its operations so we can better understand your insurance needs.",
            image: "/images/steps/tell_us.jpg"
        },
        {
            number: 2,
            title: "Select Your Coverage",
            description: "Choose from our range of insurance coverage options tailored to your business requirements.",
            image: "/images/steps/select_coverage.jpg"
        },
        {
            number: 3,
            title: "Get Your Certificate",
            description: "Receive your certificate of insurance immediately after completing your purchase.",
            image: "/images/steps/get_covered.jpg"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 mt-8">
            <h2 className="text-3xl font-bold text-center mb-12">Go through simple steps to get insured</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
                <div 
                key={step.number}
                className="bg-white text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                <div className="relative w-full h-52 mb-6">
                    <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="rounded-lg object-cover"
                    priority
                    />
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default StepsToGetInsurance;