import { useState } from "react";
import "./App.css";
import Header from "../../home/src/components/Header/Header";
import Footer from "../../home/src/components/Footer/Footer";
import CartContent from "./components/Cart/CartContent";
import "remixicon/fonts/remixicon.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-3xl mx-auto" style={{ width: "100vh" }}>
      <Header />
      <div className="my-10">
        <CartContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
