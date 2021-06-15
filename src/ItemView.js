import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ItemCardSpecific from './Components/ItemCard/ItemCardSpecific';

import './App.css';

function ItemView(props) {

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className="ItemView">
      <ItemCardSpecific props={props} />
    </div >
  );
}

export default ItemView;
