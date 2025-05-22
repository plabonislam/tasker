import Footer from "./features/Footer";
import Navbar from "./features/Navbar";
import HeroContent from "./features/hero-section/HeroContent";
function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroContent />
      <Footer />
    </div>
  );
}

export default App;
