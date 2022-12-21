import styled from "styled-components";

export const StyledForm = styled.form`
  height: fit-content;
  padding: 1.625rem 1.5rem;
  display: flex;
  flex-direction: column;
  max-width: 31.25rem;
  gap: 1rem;
  text-align: center;
  align-self: center;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  span:first-child {
    text-align: left;
  }
  div#headerFormRegister {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
