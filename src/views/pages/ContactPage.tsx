export default function ContactPage() {
  return (
    <div className="container h-full flex justify-center gap-4 space-around">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex bg-black bg-opacity-10 flex-col gap-8 h-full w-[50%] grid place-self-center p-8 rounded-xl shadow-lg text-center"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="text-center">
          <h1 className="text-h1">Contact Me</h1>
          <p className="text-p2">Get in touch with me!</p>
        </div>
        <label className="gap-4 w-full flex justify-center">
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            className="text-white w-1/2 rounded-lg p-2 bg-gray shadow-xl"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            className="text-white w-1/2 rounded-lg p-2 bg-gray shadow-xl"
          />
        </label>

        <input
          type="email"
          name="email"
          placeholder="Email address*"
          className="text-white rounded-lg p-2 bg-gray shadow-xl"
          required
        />
        <input
          type="tel"
          name="phonenumber"
          placeholder="Phone Number"
          className="text-white rounded-lg p-2 bg-gray shadow-xl"
        />

        <textarea
          name="message"
          placeholder="Message*"
          className="text-white rounded-lg p-2 bg-gray shadow-xl h-32 "
          required
        ></textarea>
        <div>
          <button type="submit" className="shadow-xl w-1/2 bg-red center">
            Send ≫
          </button>
        </div>
      </form>
    </div>
  );
}
