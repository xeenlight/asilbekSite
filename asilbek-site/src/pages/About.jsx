import Navbar from "../components/Navbar/Navbar";
import Subscribe from "../components/Subscribe/Subscribe";
import AboutSection from "../components/AboutSection/AboutSection";
import Progress from "../components/Progress/Progress";
import FullStory from "../components/FullStory/FullStory";

function About() {
  return (
    <>
      <Navbar />
      <FullStory />
      <AboutSection />
      <Progress />
      <Subscribe />
    </>
  );
}

export default About;