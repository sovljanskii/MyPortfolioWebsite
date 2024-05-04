import { useState } from "react";
import "./App.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";
function App() {
  const [currentPage, setCurrentPage] = useState("main");

  return (
    <>
      <Header setNextPage={setCurrentPage}></Header>
      <main className="hero h-[80vh]">
        <div className="container flex mr-12">
          <LeftBlock currentPage={currentPage}></LeftBlock>
          <RightBlock></RightBlock>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
