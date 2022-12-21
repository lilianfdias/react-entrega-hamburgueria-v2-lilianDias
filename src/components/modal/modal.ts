import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(51, 51, 51, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 31.25rem;
    div {
      padding: 0.813rem 1.375rem;
      background-color: var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    div:nth-child(2) {
      padding: 0.813rem 1.375rem;
      background-color: var(--white);
      display: flex;
      flex-direction: column;
      div {
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;
