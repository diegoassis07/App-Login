type IInputProps = {
  type: "email" | "password";
  placeholder: string;
  title: string;
};

import IconEmail from "../../assets/email.svg";
import IconPassword from "../../assets/lock.svg";
import IconEyeOpenned from "../../assets/eye-openned.svg";
import IconEyeClosed from "../../assets/eye-closed.svg";

import * as S from "./style";

const getIcons = {
  password: <IconPassword />,
  email: <IconEmail />,
};

const Input = ({ type, placeholder, title }: IInputProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.ContainerInput>
        {getIcons[type]}
        <S.Input
          style={{ width: type === "password" ? "83%" : "90%" }}
          placeholder={placeholder}
          secureTextEntry={type === "password"}
        />

        <S.HidePaswword>
          {type === "password" && <IconEyeOpenned />}
        </S.HidePaswword>
      </S.ContainerInput>
    </S.Container>
  );
};

export default Input;
