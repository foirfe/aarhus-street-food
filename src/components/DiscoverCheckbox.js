import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconParkOutlineChili from "../CookingIcons/IconParkOutlineChili";
import PhCookingPotBold from "../CookingIcons/PhCookingPotBold";
import MdiChiliOffOutline from "../CookingIcons/MdiChiliOffOutline";
import IconParkOutlineCakeFive from "../CookingIcons/IconParkOutlineCakeFive";
import MdiFruitGrapesOutline from "../CookingIcons/MdiFruitGrapesOutline";
import IconParkOutlineCarrot from "../CookingIcons/IconParkOutlineCarrot";
import EpChicken from "../CookingIcons/EpChicken";

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
               <div className="row1">
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="spicy" onChange={(e) => setSpicy(e.target.checked)} checked={spicy} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <IconParkOutlineChili />
                           </span>
                           <span className="span-text">Spicy</span>
                        </div>
                     </label>
                  </div>
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="mildt" onChange={(e) => setMildt(e.target.checked) } checked={mildt} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <MdiChiliOffOutline />
                           </span>
                           <span className="span-text">Sarte Smagsløg</span>
                        </div>
                     </label>
                  </div>
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="krydret" onChange={(e) => setKrydret(e.target.checked)} checked={krydret} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <PhCookingPotBold />
                           </span>
                           <span className="span-text">Krydret</span>
                        </div>
                     </label>
                  </div>
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="friture" onChange={(e) => setFriture(e.target.checked)} checked={friture} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <EpChicken />
                           </span>
                           <span className="span-text">Friture</span>
                        </div>
                     </label>
                  </div>
               </div>{" "}
               {/* row 1 slut */}
               <div className="row2">
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="sodt" onChange={(e) => setSodt(e.target.checked)} checked={sodt} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <IconParkOutlineCakeFive />
                           </span>
                           <span className="span-text">Sødt</span>
                        </div>
                     </label>
                  </div>
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="smasulten" onChange={(e) => setSmasulten(e.target.checked)} checked={smasulten} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <MdiFruitGrapesOutline />
                           </span>
                           <span className="span-text">Små Sulten</span>
                        </div>
                     </label>
                  </div>
                  <div className="label-box">
                     <label>
                        <input type="checkbox" value="plantebaseret" onChange={(e) => setPlantebaseret(e.target.checked)} checked={plantebaseret} />
                        <div className="span-icon-box">
                           <span className="span-icon">
                              <IconParkOutlineCarrot />
                           </span>
                           <span className="span-text">Plantebaseret</span>
                        </div>
                     </label>
                  </div>
               </div>{/* row 2 slut */}
            </div>
            <button>SE DINE RETTER</button>
            <p>{errormessage}</p>
         </form>
      </div>
   );
}
