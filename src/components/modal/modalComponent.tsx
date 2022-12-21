import { Btn } from "../../styles/buttons/buttons";
import { TextStyled } from "../../styles/tipography/tipography";
import { Modal } from "./modal";
import { ModalTotal } from "./modalTotalComponent";
import { ModalUl } from "./modalUlComponent";
import { useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";

export const ModalProduct = () => {
  const { setShowModal, foodCart } = useContext(FoodContext);

  return (
    <>
      <Modal>
        <div>
          <div>
            <TextStyled tag="span" color="white" fontSize="heading-4">
              Carrinho de compras
            </TextStyled>
            <Btn btnColor="noBackground" onClick={() => setShowModal(false)}>
              x
            </Btn>
          </div>
          <div>
            {foodCart.length === 0 && (
              <div>
                <TextStyled tag="span" color="black" fontSize="heading-3">
                  Sua sacola está vazia
                </TextStyled>
                <TextStyled tag="span" color="grey" fontSize="body">
                  Adicione itens
                </TextStyled>
              </div>
            )}
            <ModalUl />
            {foodCart.length > 0 && <ModalTotal />}
          </div>
        </div>
      </Modal>
    </>
  );
};
