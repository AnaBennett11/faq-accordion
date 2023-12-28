import React, {useState} from 'react';
import '../Accordion/Accordion.scss';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';


const Accordion = ({question, answer}) => {
     const [isAnswerVisible, setIsAnswerVisible] = useState(false);


  const toggleAnswerVisibility = (e) => {
    e.preventDefault();
    setIsAnswerVisible(!isAnswerVisible);
  };


    return (
      <div className="accordion">
        <div className="accordion_row">
          <h1 className="accordion_question">{question}</h1>
          <button className="accordion_button" onClick={toggleAnswerVisibility}>
            <img
              src={isAnswerVisible ? minus : plus}
              alt={isAnswerVisible ? "minus" : "plus"}
            />
          </button>
        </div>
        {isAnswerVisible && (
          <div className="accordion_answer">
            <p>{answer}</p>
          </div>
        )}
      </div>
    );
};

export default Accordion;