type IButtonProps = {
  title: string;
};

import * as S from "./style";

const Button = ({ title }: IButtonProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Button;
