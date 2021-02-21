import styled from "styled-components";
import tmdb from "../img/tmdb.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <img src={tmdb} alt="img" />
      <p>&copy; 2021 JaJaTao & TMDB</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #0d253f;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font: #90cea1;
  font-size: 0.75rem;
  img {
    width: 10%;
  }
`;

export default Footer;
