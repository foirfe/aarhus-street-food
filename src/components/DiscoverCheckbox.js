import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconParkOutlineChili from "../CookingIcons/IconParkOutlineChili";
import PhCookingPotBold from "../CookingIcons/PhCookingPotBold";
import MdiChiliOffOutline from "../CookingIcons/MdiChiliOffOutline";
import IconParkOutlineFrenchFries from "../CookingIcons/IconParkOutlineFrenchFries";
import IconParkOutlineCakeFive from "../CookingIcons/IconParkOutlineCakeFive";
import MdiFruitGrapesOutline from "../CookingIcons/MdiFruitGrapesOutline";
import IconParkOutlineCarrot from "../CookingIcons/IconParkOutlineCarrot";

export default function DiscoverCheckbox() {
   const [errormessage, setErrorMessage] = useState("");
   const navigate = useNavigate();

   const [spicy, setSpicy] = useState(localStorage.getItem("spicy"));
   const [mildt, setMildt] = useState(localStorage.getItem("mildt"));
   const [krydret, setKrydret] = useState(localStorage.getItem("krydret"));
   const [friture, setFriture] = useState(localStorage.getItem("friture"));
   const [sodt, setSodt] = useState(localStorage.getItem("sodt"));
   const [smasulten, setSmasulten] = useState(localStorage.getItem("smasulten"));
   const [plantebaseret, setPlantebaseret] = useState(localStorage.getItem("plantebaseret"));

   function handleSubmit(event) {
      event.preventDefault();
      const checked = document.querySelectorAll("input[type=checkbox]:checked").length;
      if (!checked) {
         setErrorMessage("Du skal minimum vælge 1 kategori.");
      } else {
         for (const item of event.target.elements) {
            if (item.checked) {
               localStorage.setItem(item.value, true);
            } else {
               localStorage.removeItem(item.value);
            }
         }
         navigate("/Resultat");
      }
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="checkboxes">
               <label>
                  <input type="checkbox" value="spicy" onChange={e => setSpicy(e.target.checked)} checked={spicy} />
                  <IconParkOutlineChili />
               </label>
               <label>
                  <input type="checkbox" value="mildt" onChange={e => setMildt(e.target.checked)} checked={mildt} />
                  <MdiChiliOffOutline />
               </label>
               <label>
                  <input type="checkbox" value="krydret" onChange={e => setKrydret(e.target.checked)} checked={krydret} />
                  <PhCookingPotBold />
               </label>
               <label>
                  <input type="checkbox" value="friture" onChange={e => setFriture(e.target.checked)} checked={friture} />
                  <IconParkOutlineFrenchFries />
               </label>
               <label>
                  <input type="checkbox" value="sodt" onChange={e => setSodt(e.target.checked)} checked={sodt} />
                  <IconParkOutlineCakeFive />
               </label>
               <label>
                  <input type="checkbox" value="smasulten" onChange={e => setSmasulten(e.target.checked)} checked={smasulten} />
                  <MdiFruitGrapesOutline />
               </label>
               <label>
                  <input type="checkbox" value="plantebaseret" onChange={e => setPlantebaseret(e.target.checked)} checked={plantebaseret} />
                  <IconParkOutlineCarrot />
               </label>
               <button>Udforsk</button>
               <p>{errormessage}</p>
            </div>
         </form>
      </div>
   );
}
