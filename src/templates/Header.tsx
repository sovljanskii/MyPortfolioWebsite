import myLogo from "../assets/headerlogo.png";
function Header() {
  return (
    <header
      id="header"
      className="w-full bg-black text-sm uppercase flex-1 flex-row"
    >
      <div className="w-20"></div>
      <div className="flex flex-row justify-center gap-12 h-14 items-center">
        <a href="">About me</a>
        <a href="">My cv</a>
        <img src={myLogo} alt="Logo" className="pt-12"></img>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </header>
  );
}

export default Header;
