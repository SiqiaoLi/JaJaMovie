import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { selectList } from "../actions/navAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const list = pathname.split("/")[1];

  return (
    <StyledNav>
      <h1>
        <Link to="/">JaJa</Link>
      </h1>
      <ul>
        <li>
          <Link
            to="/upcoming"
            onClick={() => {
              dispatch(selectList("upcoming"));
            }}
          >
            Upcoming
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width:
                list === "" || list === "JaJaMovie" || list === "upcoming"
                  ? "50%"
                  : "0%",
            }}
          />
        </li>
        <li>
          <Link
            to="/nowplaying"
            onClick={() => {
              dispatch(selectList("nowplaying"));
            }}
          >
            Now Playing
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: list === "nowplaying" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link
            to="/popular"
            onClick={() => {
              dispatch(selectList("popular"));
            }}
          >
            Popular
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: list === "popular" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 7vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #0d253f;
  position: sticky;
  top: 0;

  h1 {
    font-family: "Montserrat", sans-serif;
  }

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.8rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 7rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #8ac4d0;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 55%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
