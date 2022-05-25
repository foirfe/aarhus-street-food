import DiscoverCheckbox from "../components/DiscoverCheckbox";
import Logo from "../img/Logo.png";

export default function DiscoverPage() {
   return (
      <div className="discoverpage">
         <h1>Discover</h1>
         <img src={Logo} alt="Århus street food" />
         <h3>Vælg nogle smage du kan lide, og få nogle forslag til din ynglingsret.</h3>
         <div className="checkbox">
            <DiscoverCheckbox />
         </div>
      </div>
   );
}
