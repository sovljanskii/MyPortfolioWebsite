import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image from "../../assets/3d_model.webp";
import LinkedButton from "../../components/general/LinkedButton";
import H2 from "../../components/general/H2";
import H1 from "../../components/general/H1";
export default function AboutMePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container h-full flex flex-col gap-8">
        <HelmetProvider>
          <Helmet>
            <link rel="canonical" href={"https://sovljanski.com/about-me"} />
            <title>About Me | Dimitrije Šovljanski</title>
            <link rel="preload" href={image} as="image" />
          </Helmet>
        </HelmetProvider>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10"
        >
          <H1>About me</H1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -150, x: -150 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          className="flex flex-col gap-5 z-10 laptop:w-[70%]"
        >
          <H2>These are some interesting facts about me!</H2>
          <ul className="gap-4 flex flex-col">
            <li className="text-p">
              I am currently pursuing a Bachelor's degree in Software
              Engineering at the Faculty of Computing (Računarski fakultet) in
              Belgrade, Serbia.
            </li>
            <li className="text-p">
              I started with programming very early; in middle school, making
              mini-applications and websites.
            </li>
            <li className="text-p">
              I attended the Electroengineering high school, where I acquired
              the basics of programming, database design, and web development
              and graduated with the title of Engineer of Information
              Technology.
            </li>
            <li className="text-p">
              I am a creative individual who enjoys solving problems and
              creating new stuff, always eager to learn new things and improve
              my skills.
            </li>
          </ul>
        </motion.div>
        <div className="float-center flex gap-4 z-10">
          <LinkedButton
            onClick={() => navigate("/skills")}
            animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
            transition={{
              ease: "backInOut",
              repeat: Infinity,
              duration: 1,
              repeatDelay: 3,
            }}
          >
            Skills
          </LinkedButton>
          <LinkedButton
            onClick={() => navigate("/projects")}
            animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
            transition={{
              ease: "backInOut",
              repeat: Infinity,
              duration: 1,
              delay: 1,
              repeatDelay: 3,
            }}
          >
            Projects
          </LinkedButton>
        </div>
      </div>
      <motion.img
        src={image}
        alt="3d model"
        className="pointer-events-none hidden tablet:block absolute right-0 bottom-0 h-full overflow-hidden select-none drop-shadow-[0px_3px_10px_rgba(100,100,100,0.25)]"
      />
    </>
  );
}
