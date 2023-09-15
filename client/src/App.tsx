import React, { useEffect, useState } from 'react';
import './App.css';
import axios from './axios';


function App() {

  const [travelPolicies, setTravelPolicies] = useState([]);
  useEffect(() => {
    axios.get('/travelPolicies').then((res) => {
      setTravelPolicies(res.data.travelPolicies ?? []);
    });
  }, [])

  return (
    <div className="App">
      <h2>Available Travel Policies</h2>
      <ul>
        {travelPolicies.map((travelPolicy: any) => (
          <li key={travelPolicy.id}>{travelPolicy.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
