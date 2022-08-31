import React from "react";

const ContactIcon = ({ children }) => {
  return (
    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-ppointer hover:scale-125 ease-in duration-300">
      {children}
    </div>
  );
};

export default ContactIcon;
