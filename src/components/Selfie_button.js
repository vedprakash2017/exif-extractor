import React, { useState } from 'react'
import { connect } from 'react-redux'
import { get_code } from '../redux/code/get_code'
import { useSelector, useDispatch } from 'react-redux'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useEffect } from 'react';
import axios from 'axios'


function Selfie_button() {
  const [dataUri, setDataUri] = useState('');
  const exifcode = useSelector(state => state.exifcode)
  const dispatch = useDispatch()

   useEffect(() => {
     const imgdata= {
       image_data: dataUri,
       exif: '100'
     }
     axios.post('http://localhost:5000/image/add',imgdata)
      .then(res => console.log(res.data));
 },[dataUri]);

  function handleTakePhoto (dataUri) {
    setDataUri(dataUri);
  }
  return (
    <div className="A">
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
    <img src = {dataUri}/>
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
