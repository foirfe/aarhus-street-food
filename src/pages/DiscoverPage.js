import DiscoverCheckbox from "../components/DiscoverCheckbox";
import DiscoverDropDown from "../components/DiscoverDropDown";
import Logo from "../img/Logo.png";
import {useEffect} from "react";

export default function DiscoverPage() {

   useEffect(()=>{
      //Function til at nulstille localstorage om allergi når man kommer tilbage på siden
function removeDropdownItems()
{
   localStorage.removeItem("laktose");
   localStorage.removeItem("gluten");
   localStorage.removeItem("nuts")
}
removeDropdownItems();
   }
)
   return (
      <div className="discoverpage">
         <div className="discover-banner">
            <h1>DISCOVER</h1>
            <img src={Logo} alt="Århus street food" />
         </div>
         <h3>Vælg nogle smage du kan lide, og få nogle forslag til din ynglingsret.</h3>
         <div className="checkbox">
            <DiscoverCheckbox />  
         </div>
         <DiscoverDropDown />
      </div>
   );
}
