import React, { Suspense } from "react";
const Header = React.lazy(() => import("home/Header"));
const Footer = React.lazy(() => import("home/Footer"));
import PDPContent from "./components/PDPContent/PDPContent";
import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="mx-auto" style={{ width: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="my-2">
        <Routes>
          <Route
            strict
            exact
            path="/product/:id"
            Component={PDPContent}
          ></Route>
        </Routes>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
