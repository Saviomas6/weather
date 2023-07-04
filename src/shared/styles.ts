import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/background.jpg";
export const GlobalStyles = createGlobalStyle`
body {
  background:url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
 
`;
