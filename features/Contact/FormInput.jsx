import React from "react";

const FormInput = ({ label, type, additionalStyles = "", ...otherProps }) => {
  const Type = type;
  return (
    <div className="flex flex-col">
      <label className="uppercase text-sm py-2">{label}</label>
      <Type
        className={`border-2 rounded-lg p-3 flex border-gray-300 ${additionalStyles}`}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
