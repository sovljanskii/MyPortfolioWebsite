import { Routes, Route } from "react-router-dom";
import LeftBlockInterface from "./LeftBlockInterface";

function LeftBlock() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LeftBlockInterface
            heading="Dimitrije Šovljanski"
            subheading={"Welcome to my website! \nMy name is"}
            text="I'm a dedicated freelance software and web developer, continuously striving to solve any challenges I encounter."
            path="/"
          />
        }
      />
      <Route
        path="/about-me"
        element={
          <LeftBlockInterface
            subheading="Here you can learn more"
            heading="About me"
            text="I started my journey from a very young age, making mini-apps and websites in middle school, and through the year improved my algorithmic thinking and problem-solving skills. Aknowledging my passion for programming, I then enrolled in a high school for IT, where I learned the basics of programming, database design and web development and gained a title of Engineer of Information Technology.
            I'm currently a first year student of Software engineering at Računarski fakultet in Belgrade. "
            path="/about-me"
          />
        }
      />
      <Route
        path="/my-cv"
        element={
          <LeftBlockInterface
            heading="My cv"
            subheading="Here you can see"
            text=""
            path="/my-cv"
          />
        }
      />
      <Route
        path="/projects"
        element={
          <LeftBlockInterface
            subheading="Here you can see some of my"
            heading="Projects"
            text="I have worked on a variety of projects, from small websites to complex web applications."
            path="/projects"
          />
        }
      />
      <Route
        path="/contact"
        element={
          <LeftBlockInterface
            heading="Contact"
            subheading="Feel free to reach out to me!"
            text="If you would like to get in touch with me, please send me an email at sovljanski04@gmail.com. I will get back to you as soon as possible."
            path="/contact"
          />
        }
      />
    </Routes>
  );
}

export default LeftBlock;
