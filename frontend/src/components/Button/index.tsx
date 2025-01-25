import { MagnifyingGlass } from "@phosphor-icons/react";

import * as B from "./styles";

type InputProps = {
  onClick?: () => void;
  title: string;
  type: string;
};

const Button = ({ onClick, title, type }: InputProps) => {
  return (
    <B.Button
      onClick={onClick}
      type={type}
    >
      <MagnifyingGlass size={16} color="#ffffff" />
      {title}
    </B.Button>
  );
}

export default Button;
