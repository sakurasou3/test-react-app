import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "./components/Top";
import { MUI } from "./components/MUI";
import { HighlightTypography } from "./components/HighlightTypography";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/mui" element={<MUI />} />
        <Route path="/highligh" element={<HighlightTypography />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
