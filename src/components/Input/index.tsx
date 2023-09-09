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
import { useState } from "react";

const getIcons = {
  password: <IconPassword style={{ marginLeft: 6 }} />,
  email: <IconEmail />,
};

const getIconEye = {
  true: <IconEyeOpenned />,
  false: <IconEyeClosed />,
};

const Input = ({ type, placeholder, title }: IInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === "password"
  );

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.ContainerInput>
        {getIcons[type]}
        <S.Input
          style={{
            width: type === "password" ? "83%" : "90%",
            paddingLeft: type === "password" ? 8 : 5,
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />

        <S.HidePaswword
          onPress={() => setSecureTextEntry((previousState) => !previousState)}
        >
          {type === "password" && getIconEye[`${secureTextEntry}`]}
        </S.HidePaswword>
      </S.ContainerInput>
    </S.Container>
  );
};

export default Input;
