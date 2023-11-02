import AllRoutes from "./Components/AllRoutes";
import SingleProduct from "./Pages/SingleProduct";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <SingleProduct />
    </div>
  );
}

export default App;
