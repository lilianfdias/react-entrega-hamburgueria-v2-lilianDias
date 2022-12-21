import { Btn } from "../../styles/buttons/buttons";
import { TextStyled } from "../../styles/tipography/tipography";
import { CardLi } from "./cards";
import { iFoodProducts } from "../../contexts/foodContexts";
import { useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";

export const Card = ({ category, id, img, name, price }: iFoodProducts) => {
  const { setFoodCart } = useContext(FoodContext);

  return (
    <CardLi>
      <img src={img} alt="" />
      <div>
        <TextStyled color="black" fontSize="heading-3" tag="span">
          {name}
        </TextStyled>
        <TextStyled color="grey" fontSize="caption" tag="span">
          {category}
        </TextStyled>
        <TextStyled color="brand" fontSize="body-600" tag="span">
          {`R$ ${price.toFixed(2)}`}
        </TextStyled>
        <Btn
          onClick={() => {
            setFoodCart((p) => {
              if (!p.find((x) => x.id === id))
                return [...p, { category, id, img, name, price, quantity: 0 }];
              return p;
            });
          }}
          btnColor="brand"
        >
          Adicionar
        </Btn>
      </div>
    </CardLi>
  );
};
