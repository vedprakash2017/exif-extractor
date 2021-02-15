import React from 'react'
import '../App.css';

import Selfie_button from './Selfie_button';

  // <img src={ ved } alt="ved"/>
function Display_page() {
  return (

    <div className="row">
      <div className="column">
         <Selfie_button />
      </div>
      <div className="column">
        <img/>
      </div>
    </div>


  );
}

export default Display_page;
