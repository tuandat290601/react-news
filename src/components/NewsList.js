import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const { newsItems } = useSelector((state) => state.news);
  return (
    <Wrapper>
      {newsItems.map((item) => {
        return <NewsItem key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  margin-top: 20px;
`;
export default NewsList;
