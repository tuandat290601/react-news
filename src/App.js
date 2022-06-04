import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, News, SingleNews } from "./pages";
import styled from "styled-components";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/news/:id" element={<SingleNews />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;

export default App;
