import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchItem, setText } from "../features/news/newsSlice";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const { text } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const input = React.useRef(null);
  useEffect(() => {
    input.current.focus();
  }, []);
  useEffect(() => {
    dispatch(searchItem());
  }, [text]);
  return (
    <Wrapper>
      <BsSearch />
      <input
        type="text"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
        placeholder="Search ..."
        ref={input}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    height: 47px;
    border: none;
    outline: none;
    margin: 0;
    padding: 0 12px;
    text-decoration: none;
    letter-spacing: -0.228px;
    font-size: 16px;
  }
`;

export default Search;
