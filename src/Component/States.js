import React from 'react';

const State = (props) => {
    return (
        <section class="world">
            <div class="healthcare">
                <h2>The world's</h2><h2>biggest healthcare platform</h2>
                        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                         <img src="https://www.docplanner.com/img/logo.png" />
       </div>
       <div class="boxes">
        {props.tab.map(el =><div class="leader">
             <img className="image" src={el.img} alt="image"/>
                <h3>{el.title}</h3>
                <p>{el.text}</p> 
                </div>
        )}

       </div>
        </section>

                );
            }
            
        
export default State;