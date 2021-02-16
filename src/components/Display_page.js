import React from 'react'
import '../App.css'
import im from './imagedata.png'
import "bootstrap/dist/css/bootstrap.min.css"
import { useHistory } from "react-router-dom";

function Display_page() {

   const history = useHistory();
  function handleClick() {
   history.push("/");
 }
  return (
      <div className="row extra">
      <div className="col-lg-6">
        <img src = { im } style={{ width:'100%','border-radius':'10px'}}></img>
      </div>
      <div className="col-lg-6" style={{ 'text-align':'center'}}>
        <div className="row" style={{ 'height':'35%', 'margin-top':'20%' }}>
            <div className="col-12" style={{ 'height':'50%', color:'white','font-size':'30px'}}>ExifCode </div>
        </div>
        <div className="row" style={{ 'width':'60%', 'height':'10%','margin-left':'20%' }}>
            <div className="col-12"><button className="btn btn-info btn-lg btn-block" style={{ 'height':'100%','font-size':'25px'}} onClick={handleClick}> Take A Image Again</button></div>
        </div>
      </div>
</div>


  );
}

export default Display_page;
