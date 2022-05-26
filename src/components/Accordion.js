import { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
//question og answer props bliver parset til component 
  return (
    <>
      <div className="accordion-item">
        <div
          className="accordion-question"
          onClick={() => setIsActive(!isActive)}
        >
          <div>{question}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-answer">{answer}</div>}
      </div>
    </>
    //useState læser isActive, og finder ud af om questions er blevet klikket på, hvis den er, så returnere isActive som true og viser contentet i Answer.
  );
};

export default Accordion;
