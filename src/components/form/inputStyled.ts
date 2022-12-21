import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.375rem;
  input {
    height: 3rem;
    padding: 0 1rem;
    border-radius: 4px;
    color: var(--grey-1);
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    background-color: var(--grey-2);
    border: 1px solid var(--grey-50);
    transition: 0.3s;
  }
  label {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--grey-50);
  }
  input:hover {
    outline: 1px solid var(--grey-0);
    transition: 0.3s;
  }
`;
