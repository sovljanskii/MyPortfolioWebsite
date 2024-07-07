import FooterContact from "../../components/footer/FooterContact";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        id="footer"
        className="text-sm flex flex-col relative tablet:flex-row tablet:fixed bottom-0 w-full justify-center select-none z-50 "
      >
        <FooterContact />
        <p className="bg-black py-2 px-4 rounded-t-2xl text-center">
          &copy;{currentYear} Dimitrije Šovljanski
        </p>
      </footer>
    </>
  );
}
