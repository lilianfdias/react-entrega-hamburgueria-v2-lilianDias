import { StyledInput } from "../form/inputStyled";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type: string;
  register: UseFormRegisterReturn;
  placeholder: string;
  disable?: boolean;
}

// export const Input = ({ id, label, type, register, placeholder, disabled }<iInputProps>) => {
export const Input = ({
  label,
  id,
  register,
  type,
  placeholder,
  disable,
  ...rest
}: iInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disable}
        {...register}
        {...rest}
      />
    </StyledInput>
  );
};
