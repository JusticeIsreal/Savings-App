import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Components/TopBar";
import HomePage from ".//Pages/HomePage";
import WalletPage from "./Pages/WalletPage";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WalletPage" element={<WalletPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
