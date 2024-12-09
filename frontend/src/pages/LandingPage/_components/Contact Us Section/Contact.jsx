import React from "react";
import ContactForm from "./_components/ContactForm";
import kodyContact from "../../../../public/assets/landing page/kody-contact.png";

const Contact = () => {
  return (
    <div className="pt-28 mt-12" id="contact">
      <h1 className="text-6xl max-sm:text-4xl font-medium z-10">
        Kody is here to help!
      </h1>
      <p className="text-gray-200 mt-3 z-10">
        Got a question, feedback, or partnership idea? We’d love to hear from
        you.
      </p>
      <div className="flex justify-between items-start flex-wrap">
        <div className="mt-6 flex flex-col gap-1 text-[#0D786D]">
          <a className="hover:text-green-300 duration-200 cursor-pointer">
            Speak to Kody....
          </a>
          <a className="hover:text-green-300 duration-200 cursor-pointer">
            Shoot us an Email
          </a>
          <a className="hover:text-green-300 duration-200 cursor-pointer">
            Message us on Instagram
          </a>
          <div className="my-6">
            <ContactForm />
          </div>
        </div>
        <img
          src={kodyContact}
          width={400}
          className="-translate-y-10 max-md:hidden"
        />
      </div>
    </div>
  );
};

export default Contact;
