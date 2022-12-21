import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80vw;
  height: 100vh;
  justify-content: space-between;
  gap: 1.5rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    max-width: 90vw;
    gap: 1.5rem;
    margin-top: 2.5rem;
  }
`;
