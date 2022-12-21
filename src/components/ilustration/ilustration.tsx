import { StyledIlustration } from "../ilustration/ilustrationStyled";
import logokenzie from "../../assets/logo.svg";
import shoppingBag from "../../assets/shoppingBag.png";
import { TextStyled } from "../../styles/tipography/tipography";

export const Ilustration = () => {
  return (
    <StyledIlustration>
      <img src={logokenzie} alt="Logo da kenzie" />
      <div id="container">
        <span id="bag">
          <img src={shoppingBag} alt="Card com ilustração" />
        </span>
        <div>
          <TextStyled tag="span" fontSize="headline" color="grey">
            A vida é como um sanduíche, é preciso recheá-la com os melhores
            ingredientes.
          </TextStyled>
        </div>
      </div>
    </StyledIlustration>
  );
};
