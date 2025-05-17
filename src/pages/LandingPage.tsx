
import Header from "./../components/LandingPageComponents/Header"
import Hero from "./../components/LandingPageComponents/Hero"
import Tagline from "../components/LandingPageComponents/Tagline"
import Cashflow from "../components/LandingPageComponents/Cashflow"
import InventoryForcasting from '../components/LandingPageComponents/InventoryForcasting'
import SeamlessIntegration from '../components/LandingPageComponents/SeamlessIntegration'
import Automated from '../components/LandingPageComponents/Automated'
import FinancialReporting from '../components/LandingPageComponents/FinancialReporting'
import Payroll from "../components/LandingPageComponents/Payroll"
import LogoMarquee from "../components/LandingPageComponents/LogoMarquee"
import BusinessGrowth from "../components/LandingPageComponents/BusinessGrowth"
import Enterprise from "../components/LandingPageComponents/Enterprise"
import Footer from "../components/LandingPageComponents/Footer"

function LandingPage() {
  return (
    <>
        <Header/>
        <Hero/>
        <Tagline/>
        <Cashflow/>
        <InventoryForcasting/>
        <SeamlessIntegration/>
        <Automated/>
        <FinancialReporting/>
        <Payroll/>
        <LogoMarquee/>
        <BusinessGrowth/>
        <Enterprise/>
        <Footer/>
    </>
  )
}

export default LandingPage