import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { filterNew } from "../features/news/newsSlice";
import { NewsNavbar, NewsList } from "../components";
const News = () => {
  return (
    <Wrapper>
      <section>
        <NewsNavbar />
        <NewsList />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 50%;
  margin: auto;
  margin-top: 20px;
`;
export default News;
