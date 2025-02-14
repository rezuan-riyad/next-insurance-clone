import Image from "next/image";
import { ChevronRight } from 'lucide-react';

const items = [
    {   title: "Food & Beverage", image: "/images/food_and_bevarage.jpg", href: "/industry/restaurant-food-and-bar-insurance/" },
    {  title: "Contractors" , image: "/images/contractors.jpg", href: "/industry/contractors-insurance/" },
    { title: "Retail", image: "/images/retail.jpg", href: "/industry/retail-insurance/" },
    { title: "Cleaning", image: "/images/cleaning.jpg", href: "/industry/cleaners-insurance/" },
    { title: "Fitness", image: "/images/fitness.jpg", herf: "/industry/fitness/" },
    { title: "Enineers & Architechts", image: "/images/engineers_and_architects.jpg", href: "/industry/architects-engineers-insurance/" },
]

const TailoredByProfession = () => {
    return (
        <section className="py-16 mt-8">
            <div className="container mx-auto px-4 mt-[80px]">
            <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
                We are entirely focused on serving small businesses
            </h1>
            <h2 className="text-xl text-center text-gray-600 mb-8">
                Tailored business insurance. Zero hassle. Big savings.
            </h2>
            <p className="mb-6 text-center mt-4">Choose your primary coverage to get started:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 cursor-pointer">
            {items.map((item, index) => (
                <a
                href={item.href}
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                <Image 
                src={item.image} 
                alt={item.title} 
                width={200} 
                height={200}  
                className='w-full h-auto mx-auto rounded-t-lg'
                />
                <div className="flex items-center px-6 group">
                <h4 className="text-lg text-left text-gray-900 my-6 group-hover:font-bold transition-all">
                    {item.title}
                </h4>
                <ChevronRight />
                </div>
                </a>
            ))}
            </div>
            <div className="text-center mt-10">
                <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center">
                    More professionals
                <ChevronRight className="ml-2" />
                </button>
            </div>
            </div>
        </section>
    );
};

export default TailoredByProfession;