import Header from "./components/header/Header";
import * as S from '../src/style/Style.global'
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";



export default function App() {
  return(
    <>
    <S.GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}