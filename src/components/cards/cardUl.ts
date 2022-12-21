import styled from "styled-components";

export const StyledUlCard = styled.ul`
  display: flex;
  gap: 3rem;
  margin: 2rem auto;
  width: 100vw;
  max-width: 90%;
  flex-wrap: wrap;
  @media (min-width: 700px) {
    flex-direction: row;
    overflow-x: auto;
  }
`;
