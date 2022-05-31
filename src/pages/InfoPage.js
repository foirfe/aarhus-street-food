//Louise
import Accordion from "../components/Accordion";
import BackButton from "../components/BackButton";
import { Data } from "../components/Data";
import Logo from "../img/Logo.png";
import Owners from "../img/Owners.png";

export default function InfoPage() {
  return (
    <div className="infopage">
      <div className="infopage-s1-header">
        <h1>INFO OM</h1>
        <img src={Logo} alt="Aarhus Street Food" />
      </div>
      <div>
        <div className="accordion">
          <h3>OFTE STILLEDE SPØRGSMÅL</h3>
          
          {Data.map(({ question, answer }) => ( //mapper igennem array questions og answer
            <Accordion question={question} answer={answer} />
          ))} 
        </div>
      </div>
      <div>
        
        <div className="infopage-s2">
          <h3>AARHUS STREET FOODS HISTORIE</h3>
          <img src={Owners} alt="Aarhus Street Food" />
          <p>
            Inspireret af en familietur til Londons Borough Market i 2014 blev
            Aarhus Street Food grundlagt af Britt Vorre og Thomas Bendtsen i
            august 2016. De tænkte, at de gode mennesker i Århus ville byde
            sådan et initiativ velkommen.
            <br></br>
            <br></br>
            De havde ret - Aarhus bød Aarhus Street Food langt mere velkommen
            end nogen kunne forestille sig. Markedet er så velbesøgt, at hver
            borger i Århus besøger markedet 4,9 gange om året, hvilket svarer
            til mere end 1,3 millioner spisegæster om året. Det gør Aarhus
            Street Food til det mest succesrige indendørs madmarked i Danmark
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
      <BackButton />
    </div>
  ); //looper igennem Data array'et med Data.map, og parser question-answer value/pair til accordion component
}
