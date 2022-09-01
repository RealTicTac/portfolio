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
        className={`ease-in-out duration-700 transition-colors border-2 rounded-lg p-3 flex border-gray-300 dark:bg-dark dark:text-light dark:border-gray-600 ${additionalStyles}`}
        {...register(name)}
        {...otherProps}
      />
      {errors[name]?.message && (
        <div className="text-xs text-red-400 dark:text-red-300 text-center py-1">
          {errors[name]?.message}
        </div>
      )}
    </div>
  );
};

export default FormInput;
