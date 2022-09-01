import React from "react";

const FormInput = ({
  label,
  name,
  type,
  errors,
  additionalStyles = "",
  register = () => {},
  ...otherProps
}) => {
  const Type = type;
  return (
    <div className="flex flex-col">
      <label className="uppercase text-sm py-2">{label}</label>
      <Type
        className={`border-2 rounded-lg p-3 flex border-gray-300 ${additionalStyles}`}
        {...register(name)}
        {...otherProps}
      />
      {errors[name]?.message && (
        <div className="text-xs text-red-400 text-center py-1">
          {errors[name]?.message}
        </div>
      )}
    </div>
  );
};

export default FormInput;
