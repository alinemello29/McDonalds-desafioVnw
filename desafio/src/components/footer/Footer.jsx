import * as S from "./Footer.styled";
import logo from "../../assets/logo.png";
import playstore from "../../assets/playstore.png";
import appstore from "../../assets/AppStore.png";

export default function Footer() {
  return (
    <S.Footer>
      <S.ContainerLogo>
        <figure>
          <img src={logo} alt="logomarca do mac donalds" />
        </figure>
        <p>© McDonalds 2024</p>
      </S.ContainerLogo>
      <S.ContainerStore>
        <img
          src={playstore}
          alt="Botao para baixar o app mc donalds na playStore"
        />
        <img
          src={appstore}
          alt="Botao para baixar o app mc donalds na AppStore"
        />
      </S.ContainerStore>
    </S.Footer>
  );
}