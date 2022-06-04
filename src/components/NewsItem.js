import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsUpload } from "react-icons/bs";
const NewsItem = ({ id, title, description, img, company, date }) => {
  return (
    <Wrapper>
      <Link className="news-container" to={`/news/${id}`}>
        <div className="news-image">
          <img src={img} alt={title} />
        </div>
        <div className="news-content">
          <h3>{title}</h3>
          <h4>{description}</h4>
          <div className="news-info">
            <p className="company">{company}</p>
            <p>{date}</p>
            <p className="icon">
              <BsUpload />
            </p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    padding: 0;
    margin-bottom: 2px;
  }
  .news-container {
    display: flex;
    text-decoration: none;
    color: #666666;
    padding: 16px 0 10px;
  }

  .news-container:hover {
    padding: 16px 12px 10px;
    margin: 0 -12px 0;
    background-color: rgba(204, 204, 204, 0.277);
  }

  .news-image img {
    flex-shrink: 0;
    margin-right: 24px;
    width: 168px;
    height: 121px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .news-content h3 {
    color: #1a1a1a;
  }

  .news-content h4 {
    font-weight: 400;
  }
  .news-content h3,
  .news-content h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .news-info {
    display: flex;
    align-items: center;
  }
  .news-info p {
    font-size: 0.9rem;
    margin-right: 20px;
  }

  .company:hover {
    text-decoration: underline;
  }
  .icon {
    margin-top: 5px;
  }
`;
export default NewsItem;
