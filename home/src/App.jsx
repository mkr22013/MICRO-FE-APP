import Header from "home/Header";
import Footer from "home/Footer";
import "./App.css";
import HomeContent from "./components/HomeContent/HomeContent";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="text-sm mx-auto" style={{ width: "100vh" }}>
      <Header />
      <div className="my-2">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
