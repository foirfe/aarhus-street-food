import { useEffect } from "react";

export default function ResultPage() {
   useEffect(() => {
      async function getData() {
         const response = await fetch("./data/da_menu.json");
         const data = await response.json();
         console.log(data);
      }
      /* function getFilters() {

      } */

      //const filters = getFilters();
      // const results = data.filter(includes filters kommer her)
      // UseState bliver sat her
      getData();
   }, []);

   return (
      <div className="resultpage">
         <h1>Discover menu</h1>
         <p>Scroll igennem og opdag nye retter</p>
         <div></div>
      </div>
   );
}
