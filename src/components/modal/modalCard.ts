import styled from "styled-components";

export const ModalCardStyled = styled.li`
  height: 8rem;
  width: 31.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
  }
  div#div1 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div#div2 {
    display: flex;
    flex-direction: column;
    width: max-content;
    height: max-content;
    align-items: center;
  }
  div#div3 {
    display: flex;
    flex-direction: row;
    width: 6.625rem;
  }
  button:last-child {
    margin-right: 1.8rem;
  }
`;
