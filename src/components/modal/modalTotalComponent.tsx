import { Btn } from "../../styles/buttons/buttons";
import { TextStyled } from "../../styles/tipography/tipography";
import { ModalTotalStyled } from "./modalTotal";
import { FoodContext } from "../../contexts/foodContexts";
import { useContext } from "react";

export const ModalTotal = () => {
  const { foodCart, setFoodCart } = useContext(FoodContext);

  return (
    <ModalTotalStyled>
      <div id="divtotal">
        <TextStyled tag="span" fontSize="headline" color="black">
          Total
        </TextStyled>
        <TextStyled tag="span" fontSize="headline" color="grey">
          {`R$ ${foodCart
            .reduce((p, a) => p + a.price * a.quantity, 0)
            .toFixed(2)}`}
        </TextStyled>
      </div>
      <Btn onClick={() => setFoodCart([])} id="btnTotal" color="grey">
        Remover todos
      </Btn>
    </ModalTotalStyled>
  );
};
