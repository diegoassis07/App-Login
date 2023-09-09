type IInputProps = {
  type: "email" | "password";
};

import * as S from "./style";

const Input = ({ type }: IInputProps) => {
  return <S.ContainerInput></S.ContainerInput>;
};

export default Input;
