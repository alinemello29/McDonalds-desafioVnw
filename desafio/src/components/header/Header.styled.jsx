import styled from 'styled-components';

export const Nav = styled.div`
  justify-content: space-around;
  padding-left: 60px;
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const ImgLogo = styled.div`
  img {
    width: 2.5vw;
  }
`;

export const Botoes = styled.div`
  display: flex;
  gap: 10px;
  button img {
    width: 2vw;
  }
`;

export const Botao = styled.button`
  background-color: #ffc72c;
`;


export const Hero = styled.section`
  width: 100%;
  background-color: #ffc72c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`;

export const HeroPrincipal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 100%;
  div {
    width: 30%;
  }
  img {
    width: 25vw;
  }
  h1 {
    color: #fff;
    font-size: 4.5rem;
  }
  span {
    color: #db0007;
  }
`;

export const HeroSecundario = styled.div`
  width: 100%;
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  div img {
    width: 8vw;
    height: 17vh;
    cursor: pointer;
  }
`;