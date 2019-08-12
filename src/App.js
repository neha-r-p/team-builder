import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form'

function App() {
  const [memberList, setMemberList] = useState([])
  console.log(memberList)

  return (
    <div className="App">
     <Form memberList={memberList} setMemberList={setMemberList} />
    <div className="cardWrapper">
      {memberList.map(member => (
        <div className="memberCard">
          <h2>{member.name}</h2>
          <p><span>Role: </span>{member.role}</p>
          <p>{member.email}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
