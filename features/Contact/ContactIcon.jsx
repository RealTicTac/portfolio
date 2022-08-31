import React from "react";

const ContactIcon = ({ children }) => {
  return (
    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-ppointer hover:scale-125 ease-in duration-300">
      {children}
    </div>
  );
};
// const ContactIcon2 = React.forwardRef(function ContactIcon(props, ref) {
//   return (
//     <div
//       className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-ppointer hover:scale-125 ease-in duration-300"
//       ref={ref}
//     >
//       {props.children}
//     </div>
//   );
// });

export default ContactIcon;
