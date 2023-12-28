import React from "react";
import star from "../../assets/star.svg";
import "./Card.scss";
import Accordion from "../Accordion/Accordion";
import testData from "../../data/data";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="cardTitleContainer">
          <img src={star}></img>
          <h1 className="cardTitle">FAQs</h1>
        </div>
        {testData.map((data, index) => (
          <Accordion
            key={index}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </>
  );
};
export default Card;
