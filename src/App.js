import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Display_page from './components/Display_page';
import Selfie_button from './components/Selfie_button';
import { Provider } from 'react-redux'
import store from './redux/store'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import Exif_test from './components/Exif_test';

function App() {
  return (
    <div className="container" style={{'margin-top':'1.5%'}}>
    <Provider store={store}>
    <style>{'body { background-image: url("back1.jpeg");  background-repeat: no-repeat;background-size: cover; }'}</style>
    <Router>
    <Route path="/image" component ={Display_page} exact/>
    <Route path="/" component ={Selfie_button} exact />
    <Route path="/exif_test" component ={Exif_test} exact />
    </Router>
    </Provider>
    </div>
  );
}

export default App;
