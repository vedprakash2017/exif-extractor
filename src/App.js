import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Display_page from './components/Display_page';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Display_page />
    </Provider>
  );
}

export default App;
