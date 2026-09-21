import Hero from "../components/sections/Hero";
import Statistics from "../components/sections/Statistics";
import ServicesPreview from "../components/sections/ServicesPreview";
import AboutPreview from "../components/sections/AboutPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ClientsMarquee from "../components/sections/ClientsMarquee";
import TechMarquee from "../components/sections/TechMarquee";
import FeaturedProject from "../components/projects/FeaturedProject";
import ProjectCTA from "../components/projects/ProjectCTA";
import { getFeaturedProject, getProjectBySlug } from "../data/projects";

const bharatFundAxis = getProjectBySlug("bharatfundaxis");

const Home = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <FeaturedProject project={getFeaturedProject()} />
      {bharatFundAxis && (
        <FeaturedProject
          project={bharatFundAxis}
          eyebrowLabel="Group Venture"
          ctaLabel="Visit Venture"
          externalUrl={bharatFundAxis.liveUrl}
        />
      )}
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <TechMarquee />
      <ClientsMarquee />
      <ProjectCTA />
    </>
  );
};

export default Home;
