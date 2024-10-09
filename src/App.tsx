import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/views/Home/Home";
import RouteNames from "@/routes/routes-names";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
