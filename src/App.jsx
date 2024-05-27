import "./App.css";
import SignUpLogin from "./components/SignUpLogin/SignUpLogin";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<SignUpLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
