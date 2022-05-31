import StandUp from "../img/StandUp.jpg";
import SommerBio from "../img/SommerBio.jpg";
import BackButton from "../components/BackButton";


export default function EventsPage() {
   return (
      <div className="eventspage">
         <h1>Events</h1>
         <div className="events">
            <h2>Street Food Stand Up</h2>
            <img className="img-element" src={StandUp} alt="stand up event" />
            <h3>Street Food Stand-up - 1 tirsdag i måneden kl 19</h3>
            <p>
               Vores splinternye område, Grøn Stue, danner rammerne for en awesome aften og giver plads til 200 glade stand-up gæster. Aftenens lokale vært sammensætter et fedt program bestående af et
               hold dygtige komikere. Følg med på Facebook og Instagram for at holde dig opdateret. Køb din billet for 50 kr. <br />
               Vi glæder os til at se dig!
            </p>
         </div>
         <div className="events">
            <h2>Garagens Sommerbio 2022</h2>
            <img className="img-element" src={SommerBio} alt="sommerbio" />
            <h3>Kom til gratis filmvisninger i Garagens Sommerbio fra 14. juni til 16. august 2022</h3>
            <p>Læn dig tilbage og nyd sjove, romantiske og uhyggelige film fra både ind- og udland, når sommer, street food og film under åben himmel forenes. Dørene åbner klokken 19.00.</p>
            <h4>Program:</h4>
            <ul>
               <li>Tirsdag d. 14. juni: Retfærdighedens Ryttere</li>
               <li>Tirsdag d. 21 juni: 10 Things I Hate About You</li>
               <li>Tirsdag d. 28 juni: Little Miss Sunshine VS. Captain Fantastic (Afstemning Facebook)</li>
               <li>Tirsdag d. 5. juli: Ternet Ninja 2</li>
               <li>Tirsdag d. 12 juli: Juno</li>
               <li>Tirsdag d. 19 juli: CODA</li>
               <li>Tirsdag d. 26. juli: Spy</li>
               <li>Tirsdag d. 2. august: Gone Girl</li>
               <li>Tirsdag d. 9 august: The Perks of being a Wallflower</li>
               <li>Tirsdag d. 16 august: Druk</li>
            </ul>
         </div>
         <BackButton/>
      </div>
   );
}
