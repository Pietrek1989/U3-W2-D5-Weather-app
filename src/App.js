import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <header className="App-header">
          <Routes>
            <Route element={<Main></Main>} path="/" />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
