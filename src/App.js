import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./Components/TopBar";
import HomePage from ".//Pages/HomePage";
import WalletPage from "./Pages/WalletPage";
import TransactionPage from "./Pages/TransactionPage";
import DynamicWallet from "./Components/WalletComponent/DynamicWallet";
import CreateWalletPage from "./Pages/CreateWalletPage";

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WalletPage" element={<WalletPage />} />
          <Route path="/TransactionPage" element={<TransactionPage />} />
          <Route path="/wall/:id" element={<DynamicWallet />} />
          <Route path="/CreateWalletPage" element={<CreateWalletPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
