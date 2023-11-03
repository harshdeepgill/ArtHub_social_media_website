import AllRoutes from "./Components/AllRoutes";
import SingleProduct from "./Pages/SingleProduct";
import Navbar from "./Components/Navbar";
import ArtPage from "./Pages/Artpage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ArtPage />
    </div>
  );
}

export default App;
