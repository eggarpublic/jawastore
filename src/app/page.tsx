import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TrustSection from "./components/trust-section"
import WhyChooseUs from "./components/why-choose-us"
import WebsiteBenefits from "./components/website-benefits"
import PremiumAccountBenefits from "./components/premium-account-benefits"



export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection />
      <WhyChooseUs />
      <WebsiteBenefits />
      <PremiumAccountBenefits />
    </main>
  );
}
