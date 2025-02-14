const footerMenus = {
    whatWeCover: {
      title: "What we cover",
      items: [
        { name: "Business Insurance", url: "/business-insurance/" },
        { name: "General Liability", url: "/general-liability-insurance/" },
        { name: "Workers' Compensation", url: "/workers-compensation-insurance/" },
        { name: "Commercial Property", url: "/commercial-property-insurance/" },
        { name: "Business Personal Property", url: "/business-personal-property-insurance/" },
        { name: "Commercial Auto", url: "/commercial-auto-insurance/" },
        { name: "Professional Liability", url: "/professional-liability-insurance/" },
        { name: "Errors and Omissions", url: "/errors-and-omissions-insurance/" },
        { name: "Tools & Equipment", url: "/tools-and-equipment-insurance/" },
        { name: "Business Owner's Policy", url: "/business-owners-policy/" },
        { name: "Product Liability", url: "/product-liability-insurance/" },
        { name: "Employment Practices Liability", url: "/employment-practices-liability-insurance/" },
        { name: "LLC Business Insurance", url: "/business-insurance/llc-insurance/" },
        { name: "Liquor Liability", url: "/liquor-liability-insurance/" },
        { name: "Certificate of Insurance", url: "/certificate-of-insurance/" },
        { name: "Browse by State", url: "/states/" }
      ]
    },
    whoWeInsure: {
      title: "Who we insure",
      items: [
        { name: "Architects & Engineers", url: "/industry/architects-engineers-insurance/" },
        { name: "Auto Services", url: "/industry/auto-service-repair-insurance/" },
        { name: "Beauty", url: "/industry/beauty-insurance/" },
        { name: "Cleaning", url: "/industry/cleaners-insurance/" },
        { name: "Construction", url: "/industry/construction-insurance/" },
        { name: "Consulting", url: "/industry/consulting-insurance/" },
        { name: "Contractors", url: "/industry/contractors-insurance/" },
        { name: "Education", url: "/industry/education-insurance/" },
        { name: "Entertainment", url: "/industry/entertainment/" },
        { name: "Fitness", url: "/industry/fitness/" },
        { name: "Financial Services", url: "/industry/financial-services-insurance/" },
        { name: "Food Services", url: "/industry/restaurant-food-and-bar-insurance/" },
        { name: "Real Estate", url: "/industry/real-estate-insurance/" },
        { name: "Retail", url: "/industry/retail-insurance/" },
        { name: "Therapy", url: "/industry/therapy-insurance/" }
      ]
    },
    topProfessions: {
      title: "Top professions",
      items: [
        { name: "Carpenter Insurance", url: "/business/carpenter-insurance/" },
        { name: "Daycare Insurance", url: "/business/daycare-insurance/" },
        { name: "Debris Removal Insurance", url: "/business/debris-removal-insurance/" },
        { name: "General Contractor Insurance", url: "/business/general-contractor-insurance/" },
        { name: "Handyman Insurance", url: "/business/handyman-insurance/" },
        { name: "HVAC Insurance", url: "/business/hvac-insurance/" },
        { name: "Landscaping Insurance", url: "/business/landscaping-insurance/" },
        { name: "Painters Insurance", url: "/business/painter-insurance/" },
        { name: "Personal Trainer Insurance", url: "/business/personal-trainer-insurance/" },
        { name: "Roofing Insurance", url: "/business/roofing-insurance/" },
        { name: "Auto Repair Shop", url: "/business/auto-repair-shop-insurance/" },
        { name: "Yoga Teacher Insurance", url: "/business/yoga-insurance/" },
        { name: "Retail Store Insurance", url: "/business/retail-store-insurance/" }
      ]
    },
    mostPopular: {
      title: "Most popular",
      items: [
        { name: "Accountant Insurance", url: "/business/accountant-insurance/" },
        { name: "Amazon Sellers", url: "/business/amazon-sellers/" },
        { name: "Architect Insurance", url: "/business/architect-insurance/" },
        { name: "Catering Insurance", url: "/business/catering-insurance/" },
        { name: "Ecommerce Insurance", url: "/business/ecommerce-insurance/" },
        { name: "Engineer Insurance", url: "/business/engineer-insurance/" },
        { name: "Massage Insurance", url: "/business/massage-therapist-insurance/" },
        { name: "Photographer Insurance", url: "/business/photographer-insurance/" },
        { name: "Real Estate Agent Insurance", url: "/business/real-estate-agent-insurance/" },
        { name: "Restaurant Insurance", url: "/business/restaurant-insurance/" },
        { name: "Texas General Liability", url: "/general-liability-insurance/texas/" },
        { name: "Florida General Liability", url: "/general-liability-insurance/florida/" },
        { name: "California General Liability", url: "/general-liability-insurance/california/" }
      ]
    },
    aboutUs: {
      title: "About us",
      items: [
        { name: "Why NEXT?", url: "/why-next/" },
        { name: "Español", url: "/seguro-de-negocios/" },
        { name: "Become an Agent", url: "/become-a-next-insurance-agent/" },
        { name: "Blog", url: "/blog/" },
        { name: "Help Center", url: "/help-center/" },
        { name: "Insurance Glossary", url: "/glossary/" },
        { name: "Our Story", url: "/about-us/" },
        { name: "Partner With Us", url: "/become-a-next-insurance-partner/" },
        { name: "Find an Agent", url: "/agents/" },
        { name: "Sitemap", url: "/sitemap/" }
      ]
    }
  };

const terms = [
    {title: "Privacy Policy", url: "/privacy-policy/"},
    {title: "Terms of Service", url: "/terms-of-service/"},
    {title: "Licenses", url: "/licenses/"},
]


export default function Footer() { 
    return (
        <footer className="w-full bg-black mt-12 pb-12">
            <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white p-8">
                {Object.values(footerMenus).map((menu) => (
                <div key={menu.title}>
                    <h3 className="font-bold mb-4">{menu.title}</h3>
                    <ul>
                    {menu.items.map((item) => (
                        <li key={item.name} className="mb-2">
                        <a 
                            href={item.url} 
                            className="text-gray-300 hover:text-white"
                        >
                            {item.name}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>

            <div className="border-t border-white-800 p-4 flex justify-between items-center">
                <p className="text-gray-300">© 2025 Next Insurance, Florida, Texas, United States</p>
                <div>
                    {terms.map((term) => (<a className="text-gray-300 hover:text-white mx-2"key={term.url} href={term.url}>{term.title}</a>))}
                </div>
            </div>
            <p className="text-gray-300 mt-4">
                Issuance of coverage is subject to underwriting. Not available in all states. Please see the policy for full terms, conditions and exclusions. Coverage examples are for illustrative purposes only. Your policy documents govern, terms and exclusions apply. Coverage is dependent on actual facts and circumstances giving rise to a claim. Next Insurance, Inc. and/or its affiliates is an insurance agency licensed to sell certain insurance products and may receive compensation from insurance companies for such sales. Policy obligations are the sole responsibility of the issuing insurance company. Refer to Legal Notices section for additional information.
            </p>
            <p className="text-gray-300 mt-1">** Coverage examples are for illustrative purposes only. Your policy documents govern, terms and exclusions apply. Coverage is dependent on actual facts and circumstances giving rise to a claim.</p>
            <p className="text-gray-300 mt-1">† Any starting prices or premiums represented before an actual customer quote are not guaranteed and are representations of existing premiums of active policies as of December 6, 2023. To the extent permitted by law, applicants are individually underwritten, not all applicants may qualify. Individual rates and savings vary and are subject to change. Discounts and savings are available where state laws and regulations allow, and may vary by state. Certain discounts apply to specific coverages only.</p>
            </div> 
        </footer>
    );
}