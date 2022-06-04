import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Filter, Search } from "../components";
import { setSearch, clearText } from "../features/news/newsSlice";
import { IoCloseOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

const NewsNavbar = () => {
  const { isSearch } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <header>
        <div className="left-filter">{isSearch ? <Search /> : <Filter />}</div>
        <div
          className="right-filter"
          onClick={() => {
            dispatch(setSearch());
            dispatch(clearText());
          }}
        >
          {isSearch ? <IoCloseOutline /> : <BsSearch />}
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  header {
    height: 48px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    align-items: center;
  }
  .left-filter {
    width: 90%;
    height: 100%;
  }
  .right-filter {
    width: 10%;
    height: 100%;
    text-align: center;
    line-height: 48px;
    cursor: pointer;
  }
`;

export default NewsNavbar;
