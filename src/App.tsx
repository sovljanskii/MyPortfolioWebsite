import "./App.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import LeftBlock from "./components/LeftBlock";
import RightBlock from "./components/RightBlock";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <main className="hero h-[80vh] mt-12">
          <div className="container flex h-full">
            <LeftBlock />
            <RightBlock />
          </div>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
