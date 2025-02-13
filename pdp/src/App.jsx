import React, { Suspense } from "react";
const Header = React.lazy(() =>
  import("../../home/src/components/Header/Header")
);
const Footer = React.lazy(() =>
  import("../../home/src/components/Footer/Footer")
);

function App() {
  return (
    <div className="text-3xl mx-auto" style={{ width: "100vh" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="my-10"> PDP Page Content</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
