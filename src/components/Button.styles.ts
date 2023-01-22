import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '#49dedb',
  secondary: '#9bde49',
  danger: 'red',
  success: 'blue'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin: 8px;
  cursor: pointer;

  color: ${props => props.theme.white};
  background: ${props => props.theme["green-500"]};

  /* ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }} */
`