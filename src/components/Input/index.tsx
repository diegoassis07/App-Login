type IInputProps = {
  type: "email" | "password" | "person" | "phone";
  placeholder: string;
  title: string;
  error: boolean;
};

import IconEmail from "../../assets/email.svg";
import IconPassword from "../../assets/lock.svg";
import IconEyeOpenned from "../../assets/eye-openned.svg";
import IconEyeClosed from "../../assets/eye-closed.svg";
import IconPerson from "../../assets/person.svg";
import IconPhone from "../../assets/phone.svg";

import IconEmailError from "../../assets/email-error.svg";
import IconPasswordError from "../../assets/lock-error.svg";
import IconEyeOpennedError from "../../assets/eye-openned-error.svg";
import IconEyeClosedError from "../../assets/eye-closed-error.svg";
import IconPersonError from "../../assets/person-error.svg";
import IconPhoneError from "../../assets/phone-error.svg";

import * as S from "./style";
import { useState } from "react";

const getIcons = {
  password: <IconPassword style={{ marginLeft: 6 }} />,
  email: <IconEmail />,
  person: <IconPerson />,
  phone: <IconPhone />,
};

const getIconsErrors = {
  password: <IconPasswordError style={{ marginLeft: 6 }} />,
  email: <IconEmailError />,
  person: <IconPersonError />,
  phone: <IconPhoneError />,
};

const getIconEye = {
  true: <IconEyeOpenned />,
  false: <IconEyeClosed />,
};

const getIconEyeErrors = {
  true: <IconEyeOpennedError />,
  false: <IconEyeClosedError />,
};

const Input = ({ type, placeholder, title, error }: IInputProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === "password"
  );

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.ContainerInput error={error}>
        {!error ? getIcons[type] : getIconsErrors[type]}
        <S.Input
          style={{
            width: type === "password" ? "83%" : "90%",
            paddingLeft: type === "password" ? 8 : 5,
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />

        {type === "password" && (
          <S.HidePaswword
            onPress={() =>
              setSecureTextEntry((previousState) => !previousState)
            }
          >
            {!error
              ? getIconEye[`${secureTextEntry}`]
              : getIconEyeErrors[`${secureTextEntry}`]}
          </S.HidePaswword>
        )}
      </S.ContainerInput>
    </S.Container>
  );
};

export default Input;
