import "./style/style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscoverPage from "./pages/DiscoverPage";
import RestaurantPage from "./pages/RestaurantPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ResultPage from "./pages/ResultPage";
import EventsPage from "./pages/EventsPage";
import JoinUsPage from "./pages/JoinUsPage";
import InfoPage from "./pages/InfoPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/udforsk" element={<DiscoverPage />} />
        <Route path="/restaurant/:slug" element={<RestaurantPage />} />
        <Route path="/resultat" element={<ResultPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
