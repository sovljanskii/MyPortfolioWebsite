function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        id="footer"
        className="text-sm absolute bottom-0 w-full flex justify-center"
      >
        <p className="bg-black p-2 rounded-t-lg">
          &copy;{currentYear} Dimitrije Šovljanski
        </p>
      </footer>
    </>
  );
}

export default Footer;
