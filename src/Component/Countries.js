import React from "react";

const Country = props => {
  return (
    <div className="pays">
      {props.arry.map(el => (
        <div class="pay">
          <img className="image" src={el.img} alt="image" />
          <div class="more">
            {" "}
            <h3>{el.title}</h3>
            <button>{el.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
