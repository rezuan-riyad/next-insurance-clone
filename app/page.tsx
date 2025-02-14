import { Navbar } from "./@components/Navbar";
import HeroSection from "./@components/HeroSection";
import TailoredByProfession from "./@components/TailoredByProfession";
import StyledSection from "./@components/StyledSection.tsx";
import StepsToGetInsurance from "./@components/StepsToGetInsurance";
import CoverageDescription from "./@components/CoverageDescription";
import ReviewSection from "./@components/ReviewSection";
import Footer from "./@components/Footer";

const businessInsuranceSectionData = {
  title: "Get the right business insurance",
  subtitle: "Our business insurance gives you the confidence to take smart risks with your business; the kind that'll take you to the next level. So whether you're just starting out or looking to bring on a team of 20, NEXT will help get you there.",
  buttonText: "Learn More",
  buttonHref: "/business-insurance",
  bgColor: "#e6f3ff",
  textColor: "#000000"
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      {/** Feature Section */}
      <div className="w-full bg-black flex flex-row items-center justify-center">
        <h1 className="text-white text-4xl text-center p-8">Featured On</h1>
        <h1 className="text-white text-4xl text-center p-8">Forbes</h1>
        <h1 className="text-white text-4xl text-center p-8">Reuters</h1>
        <h1 className="text-white text-4xl text-center p-8">CNN</h1>
      </div>
      <TailoredByProfession />
      <StyledSection  {...businessInsuranceSectionData} />
      <StepsToGetInsurance />
      <CoverageDescription />
      <StyledSection title="Bundle two or more of our policies and save up to 20%." bgColor="#EDF9EB" buttonHref="#" buttonText="Get Instance Quote" />
      <ReviewSection />
      <Footer />
      </div>
    </div>
  );
}
