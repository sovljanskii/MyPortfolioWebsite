interface Props {
  currentPage: string;
}

function LeftBlock({ currentPage }: Props) {
  return (
    <div className="left-block w-1/2">
      <div className="flex flex-col gap-8 pb-12">
        <p className="text-lg">
          {currentPage === "main"
            ? "Welcome to my website!\n My name is"
            : currentPage === "aboutMe"
            ? "About me"
            : currentPage === "cv"
            ? "My cv"
            : currentPage === "projects"
            ? "Projects"
            : currentPage === "contact"
            ? "Contact"
            : currentPage}
        </p>
        <h1
          className="text-xl"
          style={currentPage != "main" ? { visibility: "hidden" } : {}}
        >
          Dimitrije Šovljanski
        </h1>
      </div>
      <div>
        <p className="text-med">
          {currentPage === "main"
            ? "I'm a dedicated freelance software and web developer, continuously striving to solve any challenges I encounter."
            : currentPage === "aboutMe"
            ? "I'm a first year student of software engineering at Računarski fakultet in Belgrade. " +
              "I also work as a freelance developer and I have been working in the industry for 2 years."
            : currentPage === "cv"
            ? ""
            : currentPage === "projects"
            ? "I have worked on a variety of projects, from small websites to complex web applications."
            : currentPage === "contact"
            ? "If you would like to get in touch with me, please send me an email at sovljanski04@gmail.com. I will get back to you as soon as possible."
            : currentPage}
        </p>
      </div>
    </div>
  );
}

export default LeftBlock;
