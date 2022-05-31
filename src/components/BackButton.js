//Louise
import { useNavigate } from "react-router-dom";
import Backbutton from "../img/Backbutton.svg";

export default function BackButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1); // navigere én side tilbage i routeren
  }

  return (
    <div onClick={handleClick} className="backbutton"> 
       <img src={Backbutton} alt="backbutton" />
    </div>
    //sætter gang i handleclick funktionen, når der klikkes på svg fil (tilbageknap)
  );
}
