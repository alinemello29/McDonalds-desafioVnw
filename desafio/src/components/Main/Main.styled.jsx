import styled from "styled-components";

export const Main = styled.main`
  background-color: #feb706;
  height: 80vh;
`;

export const Title = styled.div`
  text-align: center;
  padding: 1rem;
  h2 {
    font-size: 2.5rem;
    color: #fff;
  }
`;

export const Center = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 0;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 22vw;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  p {
    margin: 1rem 0.8rem;
    font-size: 0.9rem;
    font-weight: bold;
  }
  button {
    padding: 0.5rem 2rem;
    margin: 1rem;
    background-color: #feb706;
    cursor: pointer;
  }
`;

export const ImgCard = styled.div`
  width: 100%;
  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;