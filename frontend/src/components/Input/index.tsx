import React from "react";
import * as I from "./styles";

type InputProps = {
  type: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, value, onChange, placeholder, ...props }, ref) => {
    return (
      <I.Input
        ref={ref}
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

export default Input;
