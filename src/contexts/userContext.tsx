import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation, NavigateFunction } from "react-router-dom";
import { api } from "../api/api";
import { iLoginFormData } from "../pages/login/LoginPage";
import { iRegisterFormData } from "../pages/register/register";
import "react-toastify/dist/ReactToastify.css";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  submit: (data: iLoginFormData) => void;
  submitRegister: (data: iRegisterFormData) => void;
  user: {};
  setUser: React.Dispatch<React.SetStateAction<{}>>;
  Logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: NavigateFunction;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [Logged, setLogged] = useState(false);

  interface iUserLogin {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("session");

      if (!token) {
        setLoading(false);

        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get("/home");

        setUser(data);
        setLogged(true);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const submit = async (data: iLoginFormData) => {
    // console.log(data);
    try {
      const response = await api.post<iUserLogin>("/login", data);
      window.localStorage.setItem("session", response.data?.accessToken);

      // const toNavigate = location.state?.from?.pathname || "/home";
      setLogged(true);
      // navigate(toNavigate, { replace: true });
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  interface iUserRegister {
    accessToken: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }

  const submitRegister = async (data: iRegisterFormData) => {
    try {
      await api.post<iUserRegister>("/users", data);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        submit,
        submitRegister,
        user,
        setUser,
        navigate,
        loading,
        setLoading,
        Logged,
        setLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
