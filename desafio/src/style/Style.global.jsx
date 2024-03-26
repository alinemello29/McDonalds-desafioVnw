import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

button {
  display: flex;
  align-items: center;
  padding: 5px 30px;
  border: none;
  border-radius: 0.5rem;
}
`