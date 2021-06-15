import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import saveItem from '.';

import ItemCard from './Components/ItemCard/ItemCard';

import './App.css';

function App() {

  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [item, setItem] = useState();

  const handleRouter = async (data) => {
    await saveItem(data);
    setRedirect(true);
  }
  const searchItem = (e) => {
    if (e.length > 3) {
      return axios({
        validateStatus: false,
        method: 'get',
        url: `https://eu.api.blizzard.com/data/wow/search/item?namespace=static-classic-eu&name.en_GB=${e}&orderby=id&_page=1&_pageSize=300&access_token=USXul87N1EqDWmZBF4q7CeuGpddjRJ2Yyc`

      })
        .then(function (response) {
          setLoading(false);
          if (response.data.results.length > 0) {
            for (var i = 0; i < response.data.results.length; i++) {
              if (response.data.results[i].data.name.en_GB.toUpperCase().includes(e.toUpperCase())) {
                results.push(response.data.results[i])
                setResults([...results]);
              }
            }
          }
        })
        .catch(function (error) {
          return null;
        });
    }
  }
  const RenderCards = () => {
    if (results !== null) {
      return results.map((e) => {
        switch (e.data.item_class.name.en_GB) {
          default:
            return <ItemCard key={e.data.id} props={e.data} handleRouter={handleRouter} />
        }
      });
    }
  };

  useEffect(() => {
    setResults([]);
  }, [searchInput]);

  return (
    <div className="App">
      {redirect ? <Redirect to="/item" item={item} /> : null}
      < Card className="mainMenu" style={{ maxWidth: '15rem', margin: '2vh', minWidth: '15rem', height: '10vh' }}>
        <Card.Body className="mainMenuCardBody">
          <input type="text" id="searchInput" onChange={(e) => setSearchInput(e.target.value)} />
          <input className="searchButton" type="submit" value="Search" onClick={() => { searchItem(searchInput); setLoading(true); }} />
        </Card.Body>
      </Card >
      <div className="result-cards">
        {loading ? <Spinner animation="border" variant="light" /> : null}
        {RenderCards()}
      </div>
    </div >
  );
}

export default App;
