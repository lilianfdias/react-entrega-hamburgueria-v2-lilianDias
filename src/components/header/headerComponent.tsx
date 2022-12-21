import { StyledHeader } from "../header/header";
import logo from "../../assets/logo.svg";
import { InputSearch } from "../inputSearch";
import { CounterCartIcon } from "../counterCart/counterCartComponent";
import { MdLogout } from "react-icons/md";
import { Btn } from "../../styles/buttons/buttons";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";

export const Header = () => {
  const { navigate, setLogged } = useContext(UserContext);
  const { setShowModal } = useContext(FoodContext);
  const { foodCart } = useContext(FoodContext);

  const closeSession = () => {
    window.localStorage.clear();
    setLogged(false);
    navigate("/");
  };
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="logo hamburgueria kenzie" />
        <div>
          <InputSearch />
          <CounterCartIcon
            children={foodCart.length}
            handleClick={() => setShowModal(true)}
          />
          <Btn
            btnColor="noBackgroundIcon"
            btnSize="icon"
            type="button"
            onClick={closeSession}
          >
            <MdLogout />
          </Btn>
        </div>
      </div>
    </StyledHeader>
  );
};
