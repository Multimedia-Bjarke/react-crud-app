import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="app">
      <Route path="/" element={<HomePage />}></Route>
    </main>
  );
}

export default App;
