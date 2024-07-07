import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ContactPage() {
  return (
    <div className="container relative h-full flex flex-col justify-center gap-4 space-around">
      <HelmetProvider>
        <Helmet>
          <link rel="canonical" href={"https://sovljanski.com/contact"} />
          <title>Contact me | Dimitrije Šovljanski</title>
        </Helmet>
      </HelmetProvider>
      <motion.form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex bg-black bg-opacity-10 shadow-2xl mb-4 flex-col gap-8 h-full w-full laptop:w-1/2 grid place-self-center p-8 rounded-xl shadow-lg text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="text-center">
          <h1 className="text-h1s tablet:text-h1">Contact Me</h1>
          <p className="text-p2s tablet:text-p2">Get in touch with me!</p>
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
          minLength={20}
          required
        ></textarea>
        <div>
          <button
            type="submit"
            className="shadow-xl p-2 rounded-xl bg-black w-1/2 center font-bold w-4/12"
          >
            Send ≫
          </button>
        </div>
      </motion.form>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="laptop:absolute laptop:right-5 top-0 text-center laptop:text-right"
      >
        <p className="text-p2 pb-6 underline underline-offset-4	">
          Contact details
        </p>
        <div className="pb-4">
          <p className="text-p font-bold">Email</p>
          <a className="text-p" href="mailto:sovljanski04@gmail.com">
            sovljanski04@gmail.com
          </a>
        </div>
        <div className="pb-4">
          <p className="text-p font-bold">Phone number</p>
          <a className="text-p" href="tel:+381611007807">
            (+381) 61 100 7807
          </a>
        </div>
        <div className="pb-4">
          <p className="text-p font-bold">LinkedIn</p>
          <a
            className="text-p"
            target="_blank"
            href="https://www.linkedin.com/in/sovljanski"
          >
            in/sovljanski
          </a>
        </div>
      </motion.div>
    </div>
  );
}
