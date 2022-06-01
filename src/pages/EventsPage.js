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
            <h3>DEN FØRSTE TIRSDAG HVER MÅNED kl. 19:00</h3>
            <p>
               Vores splinternye område, Grøn Stue, danner rammerne for en awesome aften og giver plads til 200 glade stand-up gæster. Aftenens lokale vært sammensætter et fedt program bestående af et
               hold dygtige komikere. Følg med på Facebook og Instagram for at holde dig opdateret. <br></br> Køb din billet for 50 kr. <br />
               Vi glæder os til at se dig!
            </p>
         </div>
         <div className="events">
            <h2>SOMMERBIO 2022</h2>
            <img className="img-element" src={SommerBio} alt="sommerbio" />
            <h3>KOM TIL GRATIS SOMMER-BIO FRA 14. JUNI til 16. AUGUST 2022.</h3>
            <p>Læn dig tilbage og nyd sjove, romantiske og uhyggelige film fra både ind- og udland, når sommer, street food og film under åben himmel forenes. Dørene åbner klokken 19.00.</p>
           
            <br></br>
            <ul>
            <h4>FILM PROGRAM</h4>
              <li> <strong>Tirsdag d. 14. juni</strong><br></br>Retfærdighedens Ryttere</li> 
               <li><strong>Tirsdag d. 21 juni </strong><br></br> 10 Things I Hate About You</li>
               <li><strong>Tirsdag d. 28 juni</strong> <br></br>Little Miss Sunshine VS. Captain Fantastic (Afstemning Facebook)</li>
               <li><strong>Tirsdag d. 5. juli</strong> <br></br>Ternet Ninja 2</li>
               <li><strong>Tirsdag d. 12 juli</strong><br></br> Juno</li>
               <li><strong>Tirsdag d. 19 juli </strong><br></br> CODA</li>
               <li><strong>Tirsdag d. 26. juli</strong><br></br> Spy</li>
               <li><strong>Tirsdag d. 2. august </strong><br></br> Gone Girl</li>
               <li><strong>Tirsdag d. 9 august</strong> <br></br>The Perks of being a Wallflower</li>
               <li><strong>Tirsdag d. 16 august</strong> <br></br> Druk</li>
               </ul>
         </div>
         <BackButton/>
      </div>
   );
}
