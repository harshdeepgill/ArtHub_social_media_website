import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PricingPage from "./Pages/PricingPage";
function App() {
  const theme = useSelector(store => store.authReducer.theme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  })
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
