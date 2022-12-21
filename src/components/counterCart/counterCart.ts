import styled from "styled-components";

export const StyledDivCartIcon = styled.div`
  height: 2.25rem;
  width: 2.25rem;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    height: 1.563rem;
    width: 1.563rem;
  }
  span {
    width: 1.25rem;
    height: 1.25rem;
    background-color: var(--color-primary);
    border-radius: 7px;
    color: var(--white);
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 900;
    font-size: 14px;
    text-align: center;
  }
`;
