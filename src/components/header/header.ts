import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: var(--grey-0);
  width: 100vw;
  max-width: 100%;
  height: 5rem;
  align-items: center;
  display: flex;

  img {
    height: 2.302rem;
    width: 9.934rem;
  }
  div:first-child {
    margin: 0 auto;
    width: 100vw;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px) {
    img {
      height: 8.688rem;
    }
    div:first-child {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 14px;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.438rem;
  }

  span svg {
    height: 32px;
    width: 28px;
    cursor: pointer;
    color: var(--grey-50);
  }
`;
