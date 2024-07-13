import { Helmet, HelmetProvider } from "react-helmet-async";
import ChangingText from "../../components/main/homePage/ChangingText";
import Cursor from "../../components/main/homePage/Cursor";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LinkedButton from "../../components/general/LinkedButton";
import HomePageLogo from "../../components/main/homePage/HomePageLogo";
import H1 from "../../components/general/H1";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="container h-full flex flex-column">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com"} />
          <title>Dimitrije Šovljanski</title>
          <meta
            name="description"
            content="Skilled and creative software engineering student with a passion for programming and problem-solving."
          ></meta>
        </Helmet>
      </HelmetProvider>
      <motion.div
        animate={{ x: [-100, 0] }}
        className="w-full laptop:w-6/12 flex flex-col py-12 z-10 "
      >
        <div className="pb-4">
          <p className="text-p2">Hi, my name is</p>
          <H1>Dimitrije Šovljanski</H1>

          <p className="text-p">
            I'm a <ChangingText />
            <Cursor />
          </p>
        </div>
        <div className="pb-2">
          <p className="text-p pr-2 inline">See some cool facts about me! </p>
          <LinkedButton
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -10, 10, 0] }}
            onClick={() => navigate("/about-me")}
          >
            About me
          </LinkedButton>
        </div>
        <div className="pb-2">
          <p className="text-p pr-2 inline">Contact me!</p>
          <LinkedButton
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -10, 10, 0] }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </LinkedButton>
        </div>
      </motion.div>
      <div className="absolute tablet:relative left-0 w-full laptop:w-6/12 overflow-hidden max-h-[80vh] z-0">
        <HomePageLogo />
      </div>
    </div>
  );
}
