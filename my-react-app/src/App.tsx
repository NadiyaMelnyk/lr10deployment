import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import BlinkingShape from "./ShapesLine/BlinkingShape";
import ShapesLineForm from "./ShapesLine/ShapesLineForm";
import { ShapesLineProvider } from "./ShapesLine/ShapesLineProvider";
import ShapesList from "./ShapesLine/ShapesList";

const App = () => {
  return (
    <ShapesLineProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blinkingshape" element={<BlinkingShape />} />
            <Route path="/shapeslineform" element={<ShapesLineForm />} />
            <Route path="/shapeslist" element={<ShapesList />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </ShapesLineProvider>
  );
};

export default App;
