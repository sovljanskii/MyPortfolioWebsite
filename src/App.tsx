import "./styles/vars.css";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import MainBlock from "./components/Main/MainBlock";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <main className="flex direction-column justify-center mb-12">
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
