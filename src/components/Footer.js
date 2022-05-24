import Logo from "../img/Logo.png";

export default function Footer(){
    return(
        <div className="footer">
        <img src={Logo} alt="Aarhus Street Food"/>
        <p>Adresse: Ny Banegårdsgade 46, 8000 Aarhus C</p>
        <p>Åbningstider</p>
        <p>Mandag-Søndag 11.30 - 21.00</p>
        </div>
    )
}