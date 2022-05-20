import { useState } from "react";

export default function DiscoverCheckbox() {
   const [errormessage, setErrorMessage] = useState("");

   function handleSubmit(event) {
      event.preventDefault();
      const checked = document.querySelectorAll("input[type=checkbox]:checked").length;
      if (!checked) {
         setErrorMessage("Du skal minimum vælge 1 kategori.");
      } else {
         for (const item of event.target.elements) {
            if (item.checked) {
            }
         }
      }
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div className="checkboxes">
               <label>
                  <input type="checkbox" value="spicy" />
               </label>
               <label>
                  <input type="checkbox" value="sarte smagsløg" />
               </label>
               <label>
                  <input type="checkbox" value="krydret" />
               </label>
               <label>
                  <input type="checkbox" value="deep fried" />
               </label>
               <label>
                  <input type="checkbox" value="sodt" />
               </label>
               <label>
                  <input type="checkbox" value="smasulten" />
               </label>
               <label>
                  <input type="checkbox" value="plantebaseret" />
               </label>
               <button>Udforsk</button>
               <p>{errormessage}</p>
            </div>
         </form>
      </div>
   );
}
