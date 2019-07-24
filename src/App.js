import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form'

function App() {
  const [teamMemberList, setTeamMemberList] = useState([])
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
