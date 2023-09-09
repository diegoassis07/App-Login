type IInputProps = {
  type: "email" | "password";
  placeholder: string;
};

import IconEmail from "../../assets/email.svg";

import * as S from "./style";

const Input = ({ type, placeholder }: IInputProps) => {
  return (
    <S.ContainerInput>
      <IconEmail />
      <S.Input placeholder={placeholder} />
    </S.ContainerInput>
  );
};

export default Input;
