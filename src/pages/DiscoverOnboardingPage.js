import Logo from "../img/Logo.png";



export default function DiscoverOnboardingPage(){
  

    function handleClick(){
        localStorage.setItem("discoveronboarding", "");
       window.location.reload();
        
    }
    return(
        <div className="discoveronboardingpage">
        <div className="discover-banner">
            <h1>DISCOVER</h1>
            <img src={Logo} alt="Århus street food" />
         </div>
         <div className="onboarding-textbox">
         <h3>Hvordan gør du?</h3>
         <p>Det er rigtigt nemt, se bare her! <br></br>Max 3 nemme trin og så er du klar til at bestille!</p>
         <div className="guide">
              
             <div className="step-1">
            
            
                 <p><strong>1. </strong><br></br>Du vælger nogle smage, du har lyst til.</p>
             </div>
            
             <div className="step-2">
            
       <p><strong>2. </strong><br></br>Har du nogle allergier?<br></br>
        Så taster du dem bare ind.</p>
             </div>
              
             <div className="step-3">
            
                 <p><strong>3. </strong> <br></br>Så finder vi nogle forslag til dig, så du har nogle valgmuligheder at swipe igennem - nemt, ikke?</p>
             </div>
             <button onClick={handleClick}>Prøv Nu</button>
         </div>
        </div>
        </div>
    )
}