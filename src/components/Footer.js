import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2021 JaJaTao & TMDB</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #767682;
  font-size: 0.75rem;
`;

export default Footer;
