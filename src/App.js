import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Home from "./components/Home";
import Navabar from "./components/Navabar";

import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Navabar />
              <Home />
              <Category />

              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <>
              <Navabar />
              <Search />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
