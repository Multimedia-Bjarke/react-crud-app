import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
