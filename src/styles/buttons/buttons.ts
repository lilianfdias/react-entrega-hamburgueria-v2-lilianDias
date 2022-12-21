import styled, { css } from "styled-components";

interface iButtonsStyledProps {
  btnColor?: "brand" | "noBackground" | "noBackgroundIcon";
  btnSize?: "medium" | "icon" | "iconCounter";
  onClick?: (event?: Event) => void;
}

export const Btn = styled.button<iButtonsStyledProps>`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  transition: 0.3s;

  ${({ btnColor }) => {
    switch (btnColor) {
      case "brand":
        return css`
          color: var(--white);
          background-color: var(--color-primary);
          transition: 0.3s;
          &:hover {
            background-color: var(--color-primary-50);
            transition: 0.3s;
          }
        `;
      case "noBackground":
        return css`
          color: var(--white);
          background-color: transparent;
        `;
      case "noBackgroundIcon":
        return css`
          color: var(--grey-50);
          background-color: transparent;
          transition: 0.3s;
          font-size: 25px;
          &:hover {
            color: var(--grey-100);
            transition: 0.3s;
          }
        `;
      default:
        return css`
          color: var(--grey-50);
          background-color: var(--grey-20);
          transition: 0.3s;
          &:hover {
            color: var(--grey-20);
            background-color: var(--grey-50);
            transition: 0.3s;
          }
        `;
    }
  }};

  ${({ btnSize }) => {
    switch (btnSize) {
      case "medium":
        return css`
          /* height: 2.5rem; */
          padding: 0.656rem 1.25rem;

          text-align: center;
        `;
      case "icon":
        return css`
          height: 2.5rem;
          width: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 0.813rem;
            width: 0.813rem;
          }
        `;
      case "iconCounter":
        return css`
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        `;

      default:
        return css`
          /* height: 3.75rem; */
          padding: 0.719rem 1.25rem;
        `;
    }
  }};
`;
