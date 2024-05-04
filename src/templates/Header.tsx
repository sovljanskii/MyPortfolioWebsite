import myLogo from "../assets/headerlogo.png";
interface Props {
  setNextPage: (page: string) => void;
}

function Header({ setNextPage }: Props) {
  return (
    <header
      id="header"
      className="w-full bg-black text-sm uppercase flex-1 flex-row"
    >
      <div className="ws-20"></div>
      <div className="flex flex-row justify-center gap-12 h-14 items-center">
        <a onClick={() => setNextPage("aboutMe")}>About me</a>
        <a onClick={() => setNextPage("cv")}>My cv</a>
        <img
          onClick={() => setNextPage("main")}
          src={myLogo}
          alt="Logo"
          className="headerLogo pt-12"
        ></img>
        <a onClick={() => setNextPage("projects")}>Projects</a>
        <a onClick={() => setNextPage("contact")}>Contact</a>
      </div>
    </header>
  );
}

export default Header;
