import React from "react";
import styled from "styled-components";
import { NewsNavbar, NewsList } from "../components";
import { Link } from "react-router-dom";

const SingleNews = () => {
  return (
    <Wrapper>
      <div className="content">Single News content</div>
      <section>
        <NewsNavbar />
        <NewsList />
        <Link className="btn-see" to="/news">
          See all {">>"}
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  margin: auto;
  .btn-see {
    color: #1a1a1a;
    text-decoration: none;
  }
  .btn-see:hover {
    text-decoration: underline;
  }
`;
export default SingleNews;
