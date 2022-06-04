import React from "react";
import styled from "styled-components";
import links from "../links";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../features/news/newsSlice";

const Navbar = () => {
  const { currentPage } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="container">
        <div className="nav-bar">
          {links.map((link, index) => {
            return (
              <Link
                className="nav-item"
                key={index}
                to={link.url}
                onClick={() => dispatch(setCurrentPage(link.text))}
              >
                <p className={`${currentPage === link.text ? "active" : null}`}>
                  {link.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  margin-top: 100px;
  border-bottom: 1px solid #ebebeb;

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  * {
    color: #1a1a1a;
  }

  .container {
    width: 80%;
    margin: auto;
  }
  .nav-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
  }
  .nav-item {
    display: flex;
    align-items: center;
    font-weight: 500;
    height: 100%;
    margin: 0;
    padding: 0 12px;
    text-decoration: none;
    letter-spacing: -0.228px;
    text-transform: capitalize;
  }
  .nav-item:hover {
    background-color: rgba(204, 204, 204, 0.277);
  }
  .nav-item p {
    line-height: 45px;
  }
  .active {
    color: #8ae1a2;
    font-weight: bold;
    border-bottom: 3px solid #8ae1a2;
  }
`;

export default Navbar;
