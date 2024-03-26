import * as S from "./Main.styled";

// eslint-disable-next-line react/prop-types
export default function Card({ imagem, texto }) {
  return (
    <S.Card>
      <S.ImgCard>
        <img src={imagem} alt="" />
      </S.ImgCard>
      <p>{texto}</p>
      <button>Clique aqui</button>
    </S.Card>
  );
}