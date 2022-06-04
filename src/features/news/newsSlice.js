import { createSlice } from "@reduxjs/toolkit";

import newsItems from "../../newsItems";

const initialState = {
  initNewsItems: newsItems,
  newsItems: newsItems,
  isSearch: false,
  text: "",
  currentPage: "news",
  filter: "new",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentFilter: (state, action) => {
      state.filter = action.payload;
    },
    filterNew: (state) => {
      state.newsItems = state.newsItems.sort((newsA, newsB) => {
        var dateA = newsA.date.split("/").reverse().join();
        var dateB = newsB.date.split("/").reverse().join();
        return dateA < dateB ? -1 : dateA > dateB ? 1 : 0;
      });
      state.filter = "new";
    },
    filterTop: (state) => {
      state.newsItems = state.newsItems.sort((newsA, newsB) => {
        return newsB.view - newsA.view;
      });
      state.filter = "top";
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setSearch: (state) => {
      state.isSearch = !state.isSearch;
    },
    clearText: (state) => {
      state.text = "";
    },
    searchItem: (state) => {
      if (state.text === "") {
        state.newsItems = state.initNewsItems;
      }
      state.newsItems = state.initNewsItems.filter((news) => {
        return news.title.toLowerCase().includes(state.text, 0);
      });
    },
  },
});

export const {
  setCurrentPage,
  setCurrentFilter,
  filterNew,
  filterTop,
  setText,
  setSearch,
  clearText,
  searchItem,
} = newsSlice.actions;

export default newsSlice.reducer;
