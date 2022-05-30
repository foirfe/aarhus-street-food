import { slide as Menu } from "react-burger-menu";
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "45px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#f4a64a",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "50px",
    width: "50px",
    right: "36px",
  },
  bmCross: {
    background: "#3A50BD",
    width: "3px",
    height: "40px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%",
  },
  bmMenu: {
    background: "#C0AAA4",
    padding: "2.5em 1.5em 0",
    overflow: "hidden",
  },
  bmMorphShape: {
    fill: "#C0AAA4",
  },
  bmItemList: {
    color: "#FCF4F4",
    textTransform: "uppercase",
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Josefin Sans, sans-serif",
    lineHeight: "2.2em",
    fontSize: "1.2em",
  },
  bmItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "solid #fff 1px",
    fontWeight: "bold",
    paddingTop: "3%",
  },
  bmItemHover: {
    color: "blue",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
  arrow: {
    fontWeight: "light",
  },
};
export default function Nav() {
  return (
    <Menu right className="nav" styles={styles}>
      <a id="restaurants" className="menu-item" href="/">
        Se boder og bestil
        <div className="arrow">&rarr;</div>
      </a>
      <a id="discover" className="menu-item" href="/udforsk">
        Discover Street Food
        <div className="arrow">&rarr;</div>
      </a>
      <a id="myorder" className="menu-item" href="/bestillinger">
        Se din bestilling
        <div className="arrow">&rarr;</div>
      </a>
      <a id="events" className="menu-item" href="/events">
        Events
        <div className="arrow">&rarr;</div>
      </a>
      <a id="joinus" className="menu-item" href="/join-us">
        Join us
        <div className="arrow">&rarr;</div>
      </a>
      <a id="info" className="menu-item" href="/info">
        Info
        <div className="arrow">&rarr;</div>
      </a>
      <a id="kontakt" className="menu-item" href="/kontakt">
        Kontakt
        <div className="arrow">&rarr;</div>
      </a>
    </Menu>
  );
}
