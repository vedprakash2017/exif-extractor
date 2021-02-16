import React, { useState } from 'react';
import EXIF from 'exif-js'
import { useEffect } from 'react';
import logo from './test.jpg';

function Exif_test() {
  function getExif() {
      var img1 = document.getElementById("img1");
      if(img1 != 'null')
      EXIF.getData(img1, function() {

        var allMetaData = EXIF.getAllTags(this);
          var allMetaDataSpan = document.getElementById("allMetaDataSpan");
        if(Object.keys(allMetaData).length == 0)
        {

          allMetaDataSpan.innerHTML = `No Exif Data Exists`;
          document.getElementById("btn").innerHTML = '';
        }
        else {
          allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
          document.getElementById("btn").innerHTML = '';

        }
        console.log(allMetaData);
        }
    )
    }
  return (
    <div className="row">
    <div className="col-md-6">
    <img src={logo} id="img1" style={{width:'100%',height:'500px'}}></img>
    </div>
    <div className="col-md-6" style={{'text-align':'center'}}>
      <div>
      <div id="allMetaDataSpan" style={{'color':'white','text-align':'center','font-size':'20px'}}> All exif data will come here in json format </div>
      </div>

      <div className="btn" id="btn">
      <button className="btn btn-primary" onClick={ getExif}> Get Exif Code </button>
      </div>
    </div>
    </div>
  );
}

export default Exif_test;
