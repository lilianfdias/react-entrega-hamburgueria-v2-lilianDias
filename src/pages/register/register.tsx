import { StyledForm } from "../../components/form/form";
import { TextStyled } from "../../styles/tipography/tipography";
import { Input } from "../../components/form/input";
import { Btn } from "../../styles/buttons/buttons";
import { Container } from "../../components/container/container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Ilustration } from "../../components/ilustration/ilustration";
import { StyledLink } from "../../styles/link/link";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";

export interface iRegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}
export const RegisterPage = () => {
  const { submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver<yup.AnyObjectSchema>(registerSchema),
  });

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(submitRegister)} noValidate>
        <div id="headerFormRegister">
          <TextStyled tag="span" color="grey" fontSize="heading-3">
            Registro
          </TextStyled>
          <StyledLink to={"/"} typetext="yes">
            Retornar ao login
          </StyledLink>
        </div>
        <Input
          label="name"
          type="text"
          id="name"
          placeholder="Digite seu nome"
          register={register("name")}
        />
        <Input
          label="E-mail"
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          register={register("email")}
        />

        {errors.email?.message && (
          <TextStyled tag="span" fontSize="headline" color="red">
            {errors.email.message}
          </TextStyled>
        )}
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          register={register("password")}
        />
        <Input
          type="password"
          id="ConfirmPassword"
          placeholder="Confirmar senha"
          register={register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <TextStyled tag="span" fontSize="headline" color="red">
            {errors.confirmPassword.message}
          </TextStyled>
        )}
        <Btn type="submit" btnColor="brand">
          Cadastrar
        </Btn>
      </StyledForm>
      <Ilustration />
    </Container>
  );
};
