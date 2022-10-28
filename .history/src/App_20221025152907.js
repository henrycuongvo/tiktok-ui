import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </div>
    </Router>
  );
}

export default App;
