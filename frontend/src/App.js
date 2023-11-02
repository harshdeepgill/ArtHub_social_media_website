import AllRoutes from "./Components/AllRoutes";
import AddPost from "./Pages/AddPost";
import EditPhoto from "./Pages/EditPhoto";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
