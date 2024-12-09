import React, { useState } from "react";

const ContactForm = () => {
  const [contactData, setContactData] = useState({});

  return (
    <form className="max-w-[40em]">
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="flex flex-col flex-1">
          <label for="firstName" className="text-white ml-2 mb-1">
            First Name
          </label>
          <input
            name="firstName"
            type="text"
            className="bg-transparent border-2 border-[#515151] p-2 rounded-lg"
            placeholder="First name"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label for="lastName" className="text-white ml-2 mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="bg-transparent border-2 border-[#515151] p-2 rounded-lg"
            placeholder="Last name"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 mt-6">
        <label for="lastName" className="text-white ml-2 mb-1">
          Email
        </label>
        <input
          type="text"
          className="bg-transparent border-2 border-[#515151] p-2 rounded-lg"
          placeholder="you@company.com"
        />
      </div>
      <div className="flex flex-col flex-1 mt-6">
        <label for="phone" className="text-white ml-2 mb-1">
          Phone Number
        </label>
        <input
          type="text"
          className="bg-transparent border-2 border-[#515151] p-2 rounded-lg"
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div className="flex flex-col flex-1 mt-6">
        <label for="description" className="text-white ml-2 mb-1">
          Description
        </label>
        <textarea
          type="text"
          className="bg-transparent border-2 border-[#515151] p-2 h-[6em] rounded-lg"
          placeholder="Your message here..."
        />
      </div>
    </form>
  );
};

export default ContactForm;
