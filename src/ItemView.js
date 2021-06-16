import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import ItemCardSpecific from './Components/ItemCard/ItemCardSpecific';

import './App.css';

function ItemView(props) {

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
  }, [])

  return (
    <>
      {redirect ? <Redirect to="/" /> : null}
      <div className="ItemView">
        <ItemCardSpecific props={props} />
      </div >
      <input className="backButton" type="submit" value="Back" style={{ width: '10vw', height: '3vw', marginLeft: '8vw', fontSize: '1.5rem' }} onClick={() => { setRedirect(true) }} />
    </>
  );
}

export default ItemView;
