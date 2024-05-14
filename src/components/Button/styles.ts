import styled from 'styled-components';

type ButtonContainerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled{
        background-color: #C4C4C4;
        border: 1px solid #C4C4C4;
    }
`