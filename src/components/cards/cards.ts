import styled from "styled-components";

export const CardLi = styled.li`
  display: flex;
  height: 21.625rem;
  width: 18.75rem;
  min-width: 18.75rem;
  max-width: 100%;
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  flex-direction: column;
  align-items: flex-start;
  transition: 0.3s;

  &:hover {
    border: 2px solid var(--color-primary);
    transition: 0.3s;
  }
  img {
    height: 9.375rem;
    width: 100%;
    object-fit: contain;
  }
  div {
    padding: 1.313rem 1.625rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    align-items: flex-start;
  }
`;
