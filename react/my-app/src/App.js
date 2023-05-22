import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Routes>
    </div>
  );
}

export default App;
