import cart from "../../assets/cart.svg";
import { StyledDivCartIcon } from "./counterCart";

interface CounterIcon {
  handleClick: (event?: Event) => void;
  children?: string | number;
}

export const CounterCartIcon = ({ handleClick, children }: CounterIcon) => {
  return (
    <StyledDivCartIcon onClick={() => handleClick()}>
      <img src={cart} alt="contador de produtos" />
      <span>{children}</span>
    </StyledDivCartIcon>
  );
};
