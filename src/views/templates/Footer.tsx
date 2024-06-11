import FooterContact from "../../components/footer/FooterContact";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        id="footer"
        className="text-sm fixed bottom-0 w-full flex justify-center select-none "
      >
        <p className="bg-black py-2 px-4 rounded-t-2xl">
          &copy;{currentYear} Dimitrije Šovljanski
        </p>
        <FooterContact />
      </footer>
    </>
  );
}
