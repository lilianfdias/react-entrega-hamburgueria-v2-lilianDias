import { Card } from "../../components/cards/cardComponent";
import { StyledUlCard } from "../../components/cards/cardUl";
import { Header } from "../../components/header/headerComponent";
import { ModalProduct } from "../../components/modal/modalComponent";
import { useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";

export const HomePage = () => {
  const { products, showModal } = useContext(FoodContext);

  return (
    <>
      <Header />
      <StyledUlCard>
        {products &&
          products.map((product) => {
            return (
              <Card
                id={product.id}
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                img={product.img}
              />
            );
          })}
      </StyledUlCard>
      {showModal ? <ModalProduct /> : null}
    </>
  );
};
