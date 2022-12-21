import styled from "styled-components";
export const StyledIlustration = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 24rem;
  gap: 1.313rem;

  img {
    width: 60%;
  }
  img:last-child {
    width: 1.125rem;
    height: 1.2rem;
  }
  div#container {
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    padding: 0.875rem 1rem;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 1.188rem;
    align-items: center;
  }
  span#bag {
    height: 3.75rem;
    width: 3.75rem;
    background: rgba(39, 174, 96, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 3.75rem;
    border-radius: 5px;
  }
  @media (max-width: 700px) {
    margin-bottom: 4rem;
  }
`;
