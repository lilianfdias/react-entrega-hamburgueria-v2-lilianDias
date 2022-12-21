import styled, { css } from "styled-components";
import { Text } from ".";

interface iTextStyledProps {
  fontSize:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "headline"
    | "body"
    | "body-600"
    | "caption";
  color?: "brand" | "grey" | "black" | "white" | "red";
}

export const TextStyled = styled(Text)<iTextStyledProps>`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "heading-1":
        return css`
          font-weight: 700;
          font-size: 1.625rem;
          color: green;
        `;

      case "heading-2":
        return css`
          font-weight: 700;
          font-size: 1.375rem;
        `;

      case "heading-3":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
        `;

      case "heading-4":
        return css`
          font-weight: 700;
          font-size: 0.875rem;
        `;

      case "headline":
        return css`
          font-weight: 400;
          font-size: 1rem;
        `;

      case "body":
        return css`
          font-weight: 400;
          font-size: 0.875rem;
        `;

      case "body-600":
        return css`
          font-weight: 600;
          font-size: 0.875rem;
        `;

      case "caption":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;

      default:
        console.log("error");
    }
  }};
  ${({ color }) => {
    switch (color) {
      case "brand":
        return css`
          color: var(--color-primary);
        `;
      case "grey":
        return css`
          color: var(--grey-50);
        `;
      case "black":
        return css`
          color: var(--grey-100);
        `;
      case "white":
        return css`
          color: var(--white);
        `;
      case "red":
        return css`
          color: var(--negative);
        `;

      default:
        return css`
          color: var(--grey-100);
        `;
    }
  }}
`;
