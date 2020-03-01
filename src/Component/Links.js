import React from  'react';


const Link=(props)=>{
    return (
<section class="links">
         <p>We are a global company with local culture</p>
         <div>
           <ul class="feature">{props.array.map(el => <li> <a href="#">{el}</a></li>)}
           </ul>
            </div >
         </section>


        );
    }
    

export default Link ;