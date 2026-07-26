import Hero from "../components/Hero";
import WhyGramConnect from "../components/WhyGramConnect";
import Features from "../components/Features";
import CTA from "../components/CTA";
import HowItWorks from "../components/HowItWorks";
function Home() {
    return (
        <>
        <Hero />
        <HowItWorks/>
        <WhyGramConnect />
        <Features/>
        <CTA/>
        </>
    )
}

export default Home;