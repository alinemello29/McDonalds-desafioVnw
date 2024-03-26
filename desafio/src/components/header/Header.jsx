import logoMarca from "../../assets/logo.png";
import phone01 from "../../assets/icone_phone1.png";
import phone02 from "../../assets/icone_phone2.png";
import bigMac from "../../assets/bigmac.png";
import sorvete from "../../assets/sorvete.png";
import batata from "../../assets/batata.png";
import * as S from "./Header.styled";
import { useState } from "react";

export default function Header() {
  const [img, setImg] = useState(bigMac);


  function imagem1() {
    setImg(bigMac);
  }

  function imagem2() {
    setImg(batata);
  }

  function imagem3() {
    setImg(sorvete);
  }

  return (
    <header>
      <S.Nav>
        <S.ImgLogo>
          <img src={logoMarca} alt="logomarga do mc donal's" />
        </S.ImgLogo>
        <S.Botoes>
          <button>
            <img src={phone01} alt="icone de um celular amarelo" />
            <p>Baixe o app</p>
          </button>
          <S.Botao color="#FFC72C">
            <img src={phone02} alt="icone de uma mão segurando um celular" />
            <p>Peça seu Méqui</p>
          </S.Botao>
        </S.Botoes>
      </S.Nav>
      <S.Hero>
        <S.HeroPrincipal>
          <div>
            <img src={img} alt="imagem de um hambuguer" />
          </div>
          <div>
            <h1>
              BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span>
            </h1>
          </div>
        </S.HeroPrincipal>
        <S.HeroSecundario>
          <div>
            <img onClick={imagem1} src={bigMac} alt="imagem de um hambuguer" />
            <img onClick={imagem2} src={batata} alt="imagem de um saquinho que batata" />
            <img onClick={imagem3} src={sorvete} alt="imagem de um sorvete" />
          </div>
        </S.HeroSecundario>
      </S.Hero>
    </header>
  );
}
