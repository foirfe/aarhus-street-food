import { useEffect, useState } from "react";

export default function ResultPage() {
   const [taste, setTaste] = useState([]);
   
   
   

   useEffect(() => {
      async function getData() {
         const response = await fetch("./data/da_menu.json");
         const data = await response.json();
         const taste = data.filter(key => localStorage.getItem(key));
         console.log(taste);
         if (taste) { 
            console.log("this exists");
         } else{console.log("does not exist");}
         console.log(data);
         setTaste()
      }
      getData();
   }, [taste]);

   


   return (
      <div className="resultpage">
         <h1>Discover menu</h1>
         <p>Scroll igennem og opdag nye retter</p>
         <div> 
                     
         </div>
      </div>
   );

}
