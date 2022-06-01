import Logo from "../img/Logo.png";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import JoinUs from "../img/JoinUs.png";

export default function JoinUsPage() {
  const navigate = useNavigate();

  //Function til knappen
  function handleClick() {
    navigate("/HomePage");
  }

  return (
    <div className="joinuspage">
      <div className="joinuspage-s1-header">
        <h1>WAN'T TO JOIN?</h1>
        <img src={Logo} alt="Aarhus Street Food" />
      </div>

      <div className="joinuspage-s2-box">
        <div className="joinuspage-s2-text">
          <br></br>
          <h2>HAR DU EN DRØM OM AT VÆRE CHEF I EGET KØKKEN?</h2>
          <img src={JoinUs} alt="Aarhus Street Food stadeholder" />
          <p>
            Aarhus Street Food er altid interesseret i nye ansøgere, og vi
            inviterer foodies, uddannede kokke, iværksættere, mand og kone
            virksomheder og andre til at ansøge om en stadeplads på vores
            marked. Er du en ægte foodie og kan se dig selv være en del af vores
            foodie fællesskab, skal du fortsætte med at læse og maile os din
            ansøgning.
          </p>
          <br></br>

          <h2>NON-PROFIT UDLEJNING</h2>
          <p>
            Visionen for Aarhus Street Food er at skabe et
            iværksætter-foodie-fællesskab. Hvor iværksættere kan etablere og
            drive deres egne køkkener til lave omkostninger. Alle leje- og
            driftsomkostninger deles ligeligt mellem stadepladserne, hvilket
            skaber mulighed for en leje som ligger væsenligt under markedspris.
            Som lejer hos Aarhus Street Food lejer du reelt kun 15 m2 gulvplads
            samt din plads i fællesskabet - container med køkken skal du selv
            medbringe. Har du spørgsmål hertil skal du fluks skrive til
            <a href="mailto: kitchen@aarhusstreetfood.com">
              {" "}
              kicthen@aarhusstreetfood.com.
            </a>
          </p>

          <br></br>

          <h2>VIL DU VÆRE EN DEL AF VORES FOODIE FÆLLESSKAB?</h2>
          <p>
            Kan du se dig selv som en del af vores foodie fællesskab, og har du
            et unikt koncept, som Aarhus Street Food mangler for at være
            Dansmarks førende marked? Så skynd dig at udfylde vores
            ansøgningsformular!
            <br></br> <br></br> VI SER FREM TIL AT MODTAGE DIN ANSØGNING
          </p>

          <button onClick={handleClick}> ANSØG HER </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <BackButton />
    </div>
  );
}
