import React, { Suspense } from "react";
const Header = React.lazy(() =>
  import("../../home/src/components/Header/Header")
);
const Footer = React.lazy(() =>
  import("../../home/src/components/Footer/Footer")
);
import PDPContent from "./components/PDPContent/PDPContent";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-3xl mx-auto" style={{ width: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="my-10">
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
