
import Logo from "../img/Logo.png";


export default function ContactPage() {
  return (
    <div className="contactpage">
      <div className="contactpage-s1-header">
        <h1>KONTAKT</h1>
        <img src={Logo} alt="Aarhus Street Food" />

      </div>

      <div className="contactpage-s2-box">
        <div className="contactpage-s2-text">
          <h3>HAR DU GLEMT NOGET?</h3>
          <p>
            Kontakt Den Blå Bar ved indgangen - eller send os en mail på
            kontakt@aarhusstreetfood.com
          </p>
          <br></br>

          <h3>BORDBOOKING</h3>
          <p>
            Vi har bygget det lækreste nye område Grøn Stue med plads til 150
            siddende gæster. Her tager vi imod bordbestillinger - på minimum 16
            personer - alle ugens dage.<br></br> 
            Er I færre, finder I bare selv
            et par langborde i byens bedste Garage. Send din forspørgsel på
            booking til booking@aarhusstreetfood.com.
          </p>

          <br></br>

          <h3>FIND OS HER</h3>
          <p>her kommer google mapsis</p>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
