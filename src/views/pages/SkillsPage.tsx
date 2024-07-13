import { Helmet, HelmetProvider } from "react-helmet-async";
import H1 from "../../components/general/H1";
import H2 from "../../components/general/H2";
import Skill from "../../components/main/skillsPage/Skill";
import { motion } from "framer-motion";

export default function MyCVPage() {
  return (
    <div className="container h-full flex flex-col gap-8">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com/skills"} />
          <title>Skills | Dimitrije Šovljanski</title>
        </Helmet>
      </HelmetProvider>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <H1 className="text-center">Skills</H1>
      </motion.div>
      <div className="grid grid-cols-1 tablet:grid-cols-3 gap-4 justify-between p-4">
        <div className="skills-software bg-black bg-opacity-10 p-8">
          <H2 className="text-center pb-8 underline">Software</H2>
          <Skill name="C" percentage="60" color="red" />
          <Skill name="C#" percentage="90" color="red" />
          <Skill name="Java" percentage="80" color="red" />
          <Skill name="ASM" percentage="30" color="red" />
        </div>
        <div className="skills-web bg-black bg-opacity-10 p-8">
          <H2 className="text-center pb-8 underline">Web</H2>
          <Skill name="Wordpress" percentage="90" color="blue" />
          <Skill name="React" percentage="60" color="blue" />
          <Skill name="Javascript" percentage="70" color="blue" />
          <Skill name="HTML & CSS" percentage="90" color="blue" />
        </div>
        <div className="skills-other bg-black bg-opacity-10 p-8">
          <H2 className="text-center pb-8 underline">Other</H2>
          <Skill name="English" percentage="90" color="lime" />
          <Skill name="Serbian" percentage="100" color="lime" />
          <Skill name="Linux" percentage="60" color="lime" />
          <Skill name="Microsoft Office" percentage="80" color="lime" />
        </div>
      </div>
    </div>
  );
}
