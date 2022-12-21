import { InputStyled } from "./inputSearch";
import search from "../../assets/search.svg";
import { Btn } from "../../styles/buttons/buttons";
import { useState, useContext } from "react";
import { FoodContext } from "../../contexts/foodContexts";
import { iFoodProducts } from "../../contexts/foodContexts";
import { api } from "../../api/api";

export const InputSearch = () => {
  const { setProducts } = useContext(FoodContext);
  const [filtro, setFiltro] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("session");
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const response = await api.get<iFoodProducts[]>("/products");
    let data = response.data;
    if (filtro.length !== 0)
      data = data.filter(
        (d) =>
          d.name.toLocaleLowerCase().search(filtro) !== -1 ||
          d.category.toLocaleLowerCase().search(filtro) !== -1
      );
    setProducts(data);
  };

  return (
    <InputStyled onSubmit={handleSubmit}>
      <input
        onChange={(e) => setFiltro(e.target.value.toLocaleLowerCase())}
        placeholder="Digitar pesquisa"
        type="text"
      />
      <Btn btnColor="brand" btnSize="icon" id="btnSearch">
        <img src={search} alt="Pesquisar" />
      </Btn>
    </InputStyled>
  );
};
