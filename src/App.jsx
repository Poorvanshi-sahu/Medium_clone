import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WriteArticle from "./pages/WriteArticle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/write" element={<WriteArticle/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
