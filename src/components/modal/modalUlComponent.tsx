import { ModalCard } from "./modalCardComponent";
import { ModalUlStyled } from "./modalUl";
import { useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";

export const ModalUl = () => {
  const { foodCart } = useContext(FoodContext);

  return (
    <ModalUlStyled>
      {foodCart &&
        foodCart.map((food) => {
          return (
            <ModalCard
              id={food.id}
              key={food.id}
              name={food.name}
              category={food.category}
              price={food.price}
              img={food.img}
              quantity={food.quantity}
            />
          );
        })}
    </ModalUlStyled>
  );
};
