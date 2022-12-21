import { Btn } from "../../styles/buttons/buttons";
import { TextStyled } from "../../styles/tipography/tipography";
import { ModalCardStyled } from "./modalCard";
import { MdDelete } from "react-icons/md";
import { iFoodProductsCart } from "../../contexts/foodContexts";
import { useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";

export const ModalCard = ({
  category,
  id,
  img,
  name,
  price,
  quantity,
}: iFoodProductsCart) => {
  const { setFoodCart } = useContext(FoodContext);

  return (
    <ModalCardStyled>
      <div id="div1">
        <img src={img} alt="" />
        <div id="div2">
          <TextStyled tag="span" color="black" fontSize="heading-3">
            {name}
          </TextStyled>
          <div id="div3">
            <Btn
              onClick={() => {
                setFoodCart((previus) =>
                  previus.map((food) =>
                    food.id === id
                      ? { ...food, quantity: food.quantity - 1 }
                      : food
                  )
                );
              }}
              btnSize="iconCounter"
            >
              -
            </Btn>
            <TextStyled tag="span" color="black" fontSize="body">
              {quantity}
            </TextStyled>
            <Btn
              onClick={() => {
                setFoodCart((previus) =>
                  previus.map((food) =>
                    food.id === id
                      ? { ...food, quantity: food.quantity + 1 }
                      : food
                  )
                );
              }}
              btnSize="iconCounter"
            >
              +
            </Btn>
          </div>
        </div>
      </div>
      <Btn
        onClick={() =>
          setFoodCart((previus) => previus.filter((food) => food.id !== id))
        }
        btnSize="icon"
        btnColor="noBackgroundIcon"
      >
        <MdDelete />
      </Btn>
    </ModalCardStyled>
  );
};
