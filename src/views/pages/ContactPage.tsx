import ContactForm from "../../components/main/contactPage/ContactForm";

export default function ContactPage() {
  return (
    <div className="container h-full flex flex-row gap-4">
      <div>
        <div>
          <p className="text-p2">Feel free to</p>
          <h1 className="text-h1">Contact me</h1>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
