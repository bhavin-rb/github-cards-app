// import Card from './components/Card';
import React from 'react';
import CardList from './components/CardList';
import Form from './components/Form';
import './App.css';

function App({title}) {
  const [profiles, setProfiles] = React.useState([]);

  const addNewProfile = (profile) => {
    setProfiles(prevProfiles => [...prevProfiles, profile]);
  }
  
  return (
    <div className="App">
      <div className="App-link">{title}</div>
      <div className="card">
        <Form onSubmit={addNewProfile}/>
        <CardList profiles={profiles} />
      </div>
      
    </div>
  );
}

export default App;
