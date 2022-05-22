import "./style/style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import RestaurantPage from "./pages/RestaurantPage";
import Nav from "./components/Nav";

function App() {
   return (
      <div className="App">
         <Nav />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/udforsk" element={<DiscoverPage />} />
            <Route path="/restaurant/:name" element={<RestaurantPage />} />
            <Route path="*" element={<Navigate to="/"/>}/>
         </Routes>
      </div>
   );
}

export default App;
