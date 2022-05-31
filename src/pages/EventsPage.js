import StandUp from "../img/StandUp.jpg";
import SommerBio from "../img/SommerBio.jpg";
import BackButton from "../components/BackButton";
import Logo from "../img/Logo.png";


export default function EventsPage() {
   return (
      <div className="eventspage">
        <div className="eventspage-s1-header">
          <h1>EVENTS PÅ</h1>
          <img src={Logo} alt="Aarhus Street Food" />
        </div>
         <div className="events">
            <h2>STREET FOOD STAND-UP</h2>
            <img className="img-element" src={StandUp} alt="stand up event" />
            <h3>Den første tirsdag i måneden kl. 19:00</h3>
            <p>
               Vores splinternye område, Grøn Stue, danner rammerne for en awesome aften og giver plads til 200 glade stand-up gæster. Aftenens lokale vært sammensætter et fedt program bestående af et
               hold dygtige komikere. Følg med på Facebook og Instagram for at holde dig opdateret. <br></br> Køb din billet for 50 kr. <br />
               Vi glæder os til at se dig!
            </p>
         </div>
         <div className="events">
            <h2>SOMMERBIO 2022</h2>
            <img className="img-element" src={SommerBio} alt="sommerbio" />
            <h3>Kom til gratis filmvisninger i Garagens Sommerbio fra 14. juni til 16. august 2022</h3>
            <p>Læn dig tilbage og nyd sjove, romantiske og uhyggelige film fra både ind- og udland, når sommer, street food og film under åben himmel forenes. Dørene åbner klokken 19.00.</p>
            <h4>Program:</h4>
            <br></br>
            <ul>
              <p> Tirsdag d. 14. juni</p> <br></br>Retfærdighedens Ryttere
               <li>Tirsdag d. 21 juni <br></br> 10 Things I Hate About You</li>
               <li>Tirsdag d. 28 juni <br></br>Little Miss Sunshine VS. Captain Fantastic (Afstemning Facebook)</li>
               <li>Tirsdag d. 5. juli <br></br>Ternet Ninja 2</li>
               <li>Tirsdag d. 12 juli<br></br> Juno</li>
               <li>Tirsdag d. 19 juli <br></br> CODA</li>
               <li>Tirsdag d. 26. juli<br></br> Spy</li>
               <li>Tirsdag d. 2. august <br></br> Gone Girl</li>
               <li>Tirsdag d. 9 august <br></br>The Perks of being a Wallflower</li>
               <li>Tirsdag d. 16 august <br></br> Druk</li>
               </ul>
         </div>
         <BackButton/>
      </div>
   );
}
