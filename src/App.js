import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import SearchPage from "./component/SearchPage";
import Modal from "./component/Modal";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Modal />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;