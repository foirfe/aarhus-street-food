
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
          <div className="googlemap">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.3256480742216!2d10.20708911584501!3d56.15147398066189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f902c893789%3A0x19bb52fd461e313b!2sAarhus%20Street%20Food!5e0!3m2!1sda!2sdk!4v1653898338322!5m2!1sda!2sdk"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google maps"
            />
            </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
