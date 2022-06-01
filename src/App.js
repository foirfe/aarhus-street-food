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
import DiscoverOnboardingPage from "./pages/DiscoverOnboardingPage";
import { useEffect, useState } from "react";

function App() {
const [onboarding, setOnboarding] = useState(false);

useEffect(()=>{
  function getOnboarding(){
    if("discoveronboarding" in localStorage){
      setOnboarding(true)
    } 
    else{
       setOnboarding(false)
      }
  }
  getOnboarding();
}
)
console.log(onboarding);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/udforsk" element={onboarding ? <DiscoverPage /> : <DiscoverOnboardingPage/>} /> 
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
