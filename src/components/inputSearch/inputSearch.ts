import styled from "styled-components";

export const InputStyled = styled.form`
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  padding: 0.938rem 1.25rem;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--grey-20);
  background-color: var(--grey-0);
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--grey-100);
    transition: 0.3s;
  }
  input {
    border: none;
    height: 75%;
    outline: none;
    background-color: var(--grey-0);
  }
  ::-webkit-input-placeholder {
    font-size: 1rem;
    font-weight: 400;
    color: var(--grey-50);
  }
  button#btnSearch img {
    height: 0.813rem;
    width: 0.813rem;
  }
`;
