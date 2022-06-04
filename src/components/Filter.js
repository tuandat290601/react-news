import React from "react";
import {
  filterNew,
  filterTop,
  setCurrentFilter,
} from "../features/news/newsSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Filter = () => {
  const { filter } = useSelector((store) => store.news);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button
        className="btn"
        type="button"
        onClick={(e) => {
          dispatch(filterNew());
          dispatch(setCurrentFilter(e.target.textContent));
        }}
      >
        <p className={`${filter === "new" ? "active" : null}`}>new</p>
      </button>
      <button
        className="btn"
        type="button"
        onClick={(e) => {
          dispatch(filterTop());
          dispatch(setCurrentFilter(e.target.textContent));
        }}
      >
        <p className={`${filter === "top" ? "active" : null}`}>top</p>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 -12px;
  p {
    padding: 0;
    margin: 0;
  }
  .btn {
    font-weight: 600;
    height: 100%;
    margin: 0;
    padding: 0 12px;
    text-decoration: none;
    letter-spacing: -0.228px;
    text-transform: capitalize;
    border: none;
    background-color: unset;
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgba(204, 204, 204, 0.277);
  }
  .btn p {
    line-height: 45px;
  }
  .active {
    color: #8ae1a2;
    font-weight: bold;
    border-bottom: 3px solid #8ae1a2;
  }
`;

export default Filter;
