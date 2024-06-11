import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
export default function AboutMePage() {
  return (
    <div className="container h-full flex flex-col gap-8">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com/about-me"} />
          <title>About Me</title>
        </Helmet>
      </HelmetProvider>

      <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
        <h1 className="text-h1 text-center">About me</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-5"
      >
        <p className="text-p">
          I'm currently studying Software Engineering at the Faculty of
          Computing (Računarski fakultet) in Belgrade, Serbia.
        </p>
        <p className="text-p">
          I started with programming very early; in middle school, making
          mini-applications and websites, and with every year, my algorithmic
          thinking escalated and my problem-solving skills too. Recognizing that
          I was inclined toward programming, I attended the Electro-engineering
          school majoring in information technology, where I acquired the basics
          of programming, database design, and web development and earned the
          title of Engineer of Information Technology.
        </p>
        <p className="text-p">
          I am a creative individual who enjoys solving problems and creating
          new stuff, always eager to learn new things and improve my skills.
        </p>
      </motion.div>
    </div>
  );
}
