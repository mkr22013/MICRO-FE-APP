import "./App.css";
import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "cart/CartContent";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="mx-auto" style={{ width: "100vh" }}>
      <Header />
      <div className="my-2">
        <CartContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
