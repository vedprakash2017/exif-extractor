import React, { useState } from 'react'
import { connect } from 'react-redux'
import { get_code } from '../redux/code/get_code'
import { useSelector, useDispatch } from 'react-redux'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import { useEffect } from 'react'
import axios from 'axios'
// import '../App.css';
import Display_page from './Display_page'
import { BrowserRouter as Router, Route} from "react-router-dom"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom";
// import back from './back1.jpeg'
// const imgdata= {
//   image_data: dataUri,
//   exif: '100'
// }
// axios.post('http://localhost:5000/image/add',imgdata)
//  .then(res => console.log(res.data));



function Selfie_button() {
  const [dataUri, setDataUri] = useState('');
   const history = useHistory();
  const exifcode = useSelector(state => state.exifcode)
  const dispatch = useDispatch()

   useEffect(() => {
     if(dataUri != '')
     {
     var formData = new FormData();
var blob = dataURItoBlob(dataUri);
formData.append('imagedata', blob, 'temp.jpeg');
axios.post('http://localhost:5000/upload_image',formData)
 .then(res => console.log(res.data));
    history.push("/image");
}

},[dataUri]);

function dataURItoBlob(dataURI) {
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
  else
    byteString = unescape(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], {
    type: mimeString
  });
}

  function handleTakePhoto (dataUri) {
    setDataUri(dataUri);
  }
  return (
    <div className="r">

    <Camera
      idealResolution = {{width: 600, height: 700}}

      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    exifcode: state.exifcode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_code: () => dispatch(get_code())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selfie_button)
