import { StyledForm } from "../../components/form/form";
import { TextStyled } from "../../styles/tipography/tipography";
import { Input } from "../../components/form/input";
import { Btn } from "../../styles/buttons/buttons";
import { Container } from "../../components/container/container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import * as yup from "yup";
import { Ilustration } from "../../components/ilustration/ilustration";
import { StyledLink } from "../../styles/link/link";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect } from "react";

export interface iLoginFormData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { submit, Logged, navigate } = useContext(UserContext);

  useEffect(() => {
    if (window.localStorage.getItem("session")) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver<yup.AnyObjectSchema>(loginSchema),
  });

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <TextStyled tag="span" color="grey" fontSize="heading-3">
          Login
        </TextStyled>
        <Input
          label="E-mail"
          type="text"
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
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          register={register("password")}
        />
        {errors.password?.message && (
          <TextStyled tag="span" fontSize="headline" color="red">
            {errors.password.message}
          </TextStyled>
        )}
        <Btn type="submit" btnColor="brand">
          Logar
        </Btn>
        <TextStyled tag="span" fontSize="body" color="grey">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </TextStyled>
        <StyledLink to={"./register"}>Cadastrar</StyledLink>
      </StyledForm>
      <Ilustration />
    </Container>
  );
};
