// DropdownSelect.js
import React from "react";
import { useForm, Controller } from "react-hook-form";

const DropdownSelect = ({ name, label, options, ...props }) => {
  const { control } = useForm();

  return (
    <div className="dropdown-select">
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select {...field} {...props}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default DropdownSelect;
