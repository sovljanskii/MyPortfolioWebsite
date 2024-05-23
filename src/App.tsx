import "./App.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import MainBlock from "./components/Main/MainBlock";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <main className=" flex direction-column justify-center min-h-[90vh]">
          <div className="container h-full">
            <MainBlock />
          </div>
        </main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
