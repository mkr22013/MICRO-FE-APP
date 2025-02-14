import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import HomeContent from "./components/HomeContent/HomeContent";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <div className="text-3xl mx-auto" style={{ width: "100vh" }}>
      <Header />
      <div className="my-10">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
