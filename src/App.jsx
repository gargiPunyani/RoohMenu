import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Menu, Reservation } from "./Components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
