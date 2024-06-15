import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image from "../../assets/threed.webp";
export default function AboutMePage() {
  const navigate = useNavigate();
  return (
    <div className="container relative h-full flex flex-col gap-8">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com/about-me"} />
          <title>About Me | Dimitrije Šovljanski</title>
        </Helmet>
      </HelmetProvider>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10"
      >
        <h1 className="text-h1s tablet:text-h1 text-center">About me</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -150, x: -150 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        className="flex flex-col gap-5 z-10 tablet:w-[80%]"
      >
        <h2 className="text-p2s tablet:text-p2">
          These are some interesting facts about me!
        </h2>
        <ul className="list-[square] gap-4 flex flex-col">
          <li className="text-p">
            I am currently pursuing a Bachelor's degree in Software Engineering
            at the Faculty of Computing (Računarski fakultet) in Belgrade,
            Serbia.
          </li>
          <li className="text-p">
            I attended the Electroengineering high school, where I acquired the
            basics of programming, database design, and web development and
            graduated with the title of Engineer of Information Technology.
          </li>
          <li className="text-p">
            I started with programming very early; in middle school, making
            mini-applications and websites.
          </li>
          <li className="text-p">
            I am a creative individual who enjoys solving problems and creating
            new stuff, always eager to learn new things and improve my skills.
          </li>
        </ul>
      </motion.div>
      <div className="float-center flex gap-4 z-10">
        <motion.button
          className="button bg-black py-4 px-8 rounded-full text-p inline  hover:bg-white hover:text-black"
          onClick={() => navigate("/my-cv")}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          Check my CV
        </motion.button>
        <motion.button
          className="button bg-black py-4 px-8 rounded-full text-p inline  hover:bg-white hover:text-black"
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          Contact me!
        </motion.button>
      </div>
      <motion.img
        src={image}
        alt="3d model"
        className="absolute right-0 bottom-0 h-full overflow-hidden select-none "
        initial={{ filter: "drop-shadow(0 0 0 transparent)" }}
        whileHover={{
          filter: ["drop-shadow(1px 3px 6px rgba(100,100,100,0.5))"],
        }}
      />
    </div>
  );
}
