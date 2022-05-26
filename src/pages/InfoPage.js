import Accordion from "../components/Accordion";
import { Data } from "../components/Data";

export default function InfoPage() {
  return (
    <div className="infopage">
      <div className="infopage-s1-header">
        <h1>INFORMATION</h1>
      </div>
      <div>
        <div className="accordion">
          <h3>OFTE STILLEDE SPØRGSMÅL</h3>
          {Data.map(({ question, answer }) => (
            <Accordion question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  ); //looper igennem Data array'et med Data.map, og parser question-answer value/pair til accordion component
}
