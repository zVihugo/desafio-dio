import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick , disabled}: IButtonProps) => {
  return <ButtonContainer onClick={onClick} children={title} disabled={disabled} />;
};

export default Button;
