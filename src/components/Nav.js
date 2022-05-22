import { slide as Menu } from "react-burger-menu";
var styles = {
   bmBurgerButton: {
     position: 'fixed',
     width: '36px',
     height: '30px',
     right: '36px',
     top: '36px'
   },
   bmBurgerBars: {
     background: '#fff'
   },
   bmBurgerBarsHover: {
     background: '#a90000'
   },
   bmCrossButton: {
     height: '50px',
     width: '50px',
     right: '36px'
   },
   bmCross: {
     background: '#3A50BD',
     width: '3px',
     height: '40px'
   },
   bmMenuWrap: {
     position: 'fixed',
     height: '100%',
     width: '100%'
   },
   bmMenu: {
     background: '#C0AAA4',
     padding: '2.5em 1.5em 0',
     fontSize: '1.15em',
     overflow: 'hidden'
   },
   bmMorphShape: {
     fill: '#C0AAA4'
   },
   bmItemList: {
     color: '#FCF4F4',
     textTransform: 'uppercase',
     padding: '0.8em',
     display: 'flex',
     flexDirection: 'column',
   },
   bmItem: {
     display: 'flex',
     justifyContent: 'space-between',
     borderBottom: 'solid #fff 1px',
     fontWeight: 'bold',
     paddingTop: '3%',
   },
   bmItemHover: {
     color: 'blue',
   },
   bmOverlay: {
     background: 'rgba(0, 0, 0, 0.3)'
   },
   arrow: {
     fontWeight: 'bold'
   },
 }
export default function Nav() {
   return (
      <Menu right className="nav" styles={styles}>
         <a id="restaurants" className="menu-item" href="/">
            Se boder og bestil
          <div className="arrow">&#10148;</div> 
         </a>
         <a id="discover" className="menu-item" href="/udforsk">
            Discover Street Food
         <div className="arrow">&#10148;</div>
         </a>
         <a id="myorder" className="menu-item" href="/bestillinger">
        Se din bestilling
         <div className="arrow">&#10148;</div>
         </a>
         <a id="events" className="menu-item" href="/events">
            Events
         <div className="arrow">&#10148;</div>
         </a>      
         <a id="joinus" className="menu-item" href="/joinus">
            Join us
         <div className="arrow">&#10148;</div>
         </a>
         <a id="info" className="menu-item" href="/info">
            Info
         <div className="arrow">&#10148;</div>
         </a>        
         <a id="kontakt" className="menu-item" href="/kontakt">
           Kontakt
         <div className="arrow">&#10148;</div>
         </a>

      </Menu>
   );
}
