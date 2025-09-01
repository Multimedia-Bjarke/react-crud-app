import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
