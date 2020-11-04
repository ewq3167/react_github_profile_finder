import React from "react"; // 이거 왜 넣으라고 했더라
import logo from './logo.svg';
import SearchInput from "./component/SearchInput"
import SearchResult from "./component/SearchResult"
import './App.css';

function App() {
  return (
    <>
      <SearchInput />
      <SearchResult />
    </>
  );
}

export default App;
