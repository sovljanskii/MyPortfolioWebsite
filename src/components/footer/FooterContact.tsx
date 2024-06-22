import ContactIcon from "./ContactIcon";

export default function FooterContact() {
  return (
    <div
      id="footerContact"
      className="tablet:absolute tablet:right-0 bottom-12 justify-center tablet:bottom-0 rounded-t-lg flex direction-row pb-2 pr-6 z-50"
    >
      <ContactIcon href="tel:+381611007807" label="Contact me on my phone">
        <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
      </ContactIcon>
      <ContactIcon
        href="mailto:sovljanski04@gmail.com"
        label="Connect with me through my email"
      >
        <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.048a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
        <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />{" "}
      </ContactIcon>
      <ContactIcon
        href="https://www.linkedin.com/in/sovljanski"
        target="_blank"
        label="Connect with me on LinkedIn"
      >
        <path
          fillRule="evenodd"
          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
          clipRule="evenodd"
        />
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />{" "}
      </ContactIcon>
    </div>
  );
}
