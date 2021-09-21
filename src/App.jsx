import Navbar from "./components/Navbar";
import CryptoCard from "./components/CryptoCard";

function App() {
  return (
    <>
      <Navbar />
      <CryptoCard kittydata={kittydata} />
    </>
  );
}

export default App;
