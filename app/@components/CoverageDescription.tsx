interface CoverageCardProps {
    title: string;
    description: string;
    icon?: string;
    btnText: string;
    btnUrl: string;
    imageUrl: string;
}

const title = "Let’s find the coverage you need for your business.";
const description = "Business insurance is divided into different policies. We offer 7 types so it's easy to design the coverage that fits your business.";

const coverages = [
    {
        title: "General Liability",
        description: "Accidentally damaged customer property? General liability insurance makes those uh-oh moments okay by covering a wide range of incidents and basic risks. Contractors and cleaners can add tools and equipment coverage to protect their gear, as well.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-general-liability-black-white-3.png",
        btnUrl: "/general-liability-insurance/",
        btnText: "Learn More"
    },
    {
        title: "Workers' Compensation",
        description: "If you have employees, workers' comp is mandatory in almost every state to help cover medical bills and lost wages if a workplace accident occurs. And don't forget about the boss — add business owner's coverage to protect yourself as well.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-workers-comp-black-white-2.png",
        btnUrl: "/workers-compensation-insurance/",
        btnText: "Learn More"
    },
    {
        title: "Professional Liability/E&O",
        description: "If you're accused of making an error at work, we've got your back. Get professional liability insurance (also known as errors & omissions insurance) and you'll be protected from certain types of lawsuits and claims.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-errors-omissions-black-white-1.png",
        btnUrl: "/professional-liability-insurance/",
        btnText: "Learn More"
    },
    {
        title: "Commercial Auto",
        description: "Vehicle-related damage shouldn't mean you have to pump the brakes on your bottom line. With commercial auto, you're covered for dents, tows and damage to someone else's car or truck. Add HNOA coverage for extra protection on rentals and employee vehicles.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-auto-black-white-2.png",
        btnUrl: "/commercial-auto-insurance/",
        btnText: "Learn More"
    },
    {
        title: "Tools & Equipment",
        description: "Add a tools and equipment upgrade to your general liability insurance. If your gear ever gets damaged or stolen, we'll be there to abracadabra them back in a flash.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-tools-equipment-black-white-3.png",
        btnUrl: "/tools-and-equipment-insurance/",
        btnText: "Learn More"
    },
    {
        title: "Commercial Property",
        description: "Commercial property insurance isn't just for buildings — it can protect almost all the gear, inventory and equipment you need to do business.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-property-black-white-2.png",
        btnUrl: "/commercial-property-insurance/",
        btnText: "Learn More"
    },
    {
        title: "Business Owner's Policy",
        description: "A business owner's policy (BOP) combines general liability and commercial property into one handy package. It's a great option for protecting your business if you have a physical location, equipment or inventory and if you deal with customers or the public.",
        imageUrl: "https://www.nextinsurance.com/wp-content/uploads/2021/08/lob-business-owner-policy-black-white-2.png",
        btnUrl: "/business-owners-policy/",
        btnText: "Learn More"
    }
];


const CoverageCard: React.FC<CoverageCardProps> = ({ title, description, btnText, btnUrl }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* <div className="relative w-24 h-24 mb-4 mx-auto">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div> */}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a 
                href={btnUrl} 
                className="inline-block border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
            >
                {btnText}
            </a>
        </div>
    );
};

const CoverageDescription: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coverages.map((coverage, index) => (
                    <CoverageCard
                        key={index}
                        title={coverage.title}
                        description={coverage.description}
                        btnText = {coverage.btnText}
                        btnUrl= {coverage.btnUrl}
                        imageUrl= {coverage.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoverageDescription;