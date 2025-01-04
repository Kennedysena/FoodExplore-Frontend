import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

import { Container } from "./styles";

export function Input({ icon: Icon, type = "text", ...rest }) {
  const [isPasswordVisible, setIsVisiblePassword] = useState(false);

  const togglePasswordVisibility = () => {
    setIsVisiblePassword((prevState) => !prevState);
  };

  const inputType =
    type === "password"
      ? isPasswordVisible
        ? "text"
        : "password"
      : isPasswordVisible
        ? "text"
        : type;

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} type={inputType} />
      {type === "password" && (
        <button type="button" onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
        </button>
      )}
    </Container>
  );
}
