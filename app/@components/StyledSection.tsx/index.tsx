import React from 'react';
import Link from 'next/link';

interface StyledSectionProps {
    title: string;
    subtitle?: string;
    buttonText: string;
    buttonHref: string;
    bgColor?: string;
}

const StyledSection: React.FC<StyledSectionProps> = ({
    title,
    subtitle,
    buttonText,
    buttonHref,
    bgColor = '#ffffff', // default background color
}) => {
    return (
        <section className="py-16 mt-8" style={{ backgroundColor: bgColor }}>
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    { subtitle && <p className="text-lg text-gray-600 mb-8">{subtitle}</p>}
                    
                    <Link 
                        href={buttonHref}
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default StyledSection;