import React, {useState} from 'react';
import '../Accordion/Accordion.scss';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';


const Accordion = ({question, answer}) => {
     const [isAnswerVisible, setIsAnswerVisible] = useState(false);


  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };


    return (
      <div className="accordion">
        <h1>{question}</h1>
        {isAnswerVisible && <p>{answer}</p>}
        <button onClick={toggleAnswerVisibility}>
          <img
            src={isAnswerVisible ? minus : plus}
            alt={isAnswerVisible ? "minus" : "plus"}
          />
        </button>
      </div>
    );
};

export default Accordion;