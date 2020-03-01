import React from  'react';

const Services=(props)=>{
    return (
        <section className="service">
        {props.information.map(el =>
             <div className={el.class}>
                <h2>{el.title}</h2>
                <p>{el.Parag}</p> 
                {!el.select ? null: <select id="select">
                <option>{el.select}</option>
                    <option value="#">Argentina</option>
                    <option value="#">Australia</option>
                    <option value="#">Brazil</option>
                    <option value="#">Chile</option>
                    <option value="#">Colombia</option>
                    <option value="#">Czech</option>
                    <option value="#">France</option>
                    <option value="#">Italy</option>
                    <option value="#">Mexico</option>
                    <option value="#">Peru</option>
                    <option value="#">Poland</option>
                    <option value="#">Portugal</option>
                    <option value="#">Spain</option>
                    <option value="#">Turkey</option>
                    <option value="#">UK</option>
                </select>}
                <img className="screen" src={el.img} alt="screen"/>
                </div>)
    
        }
        </section>
        );
    }
    

export default Services ;