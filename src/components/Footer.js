import Logo from "../img/Logo.png";

export default function Footer(){
    return(
        <div className="footer">
            <a href="/">
        <img src={Logo} alt="Aarhus Street Food"/>
        </a>
        <div className="footerinfo">
        <p className="infoitalic">Adresse:</p>
        <p className="infobold"> Ny Banegårdsgade 46, 8000 Aarhus C</p>
        <p className="infoitalic">Åbningstider:</p>
        <p className="infobold">Mandag-Søndag 11.30 - 21.00</p>
        </div>
        </div>
    )
}