import React from 'react';
import Card from '../components/Card';


// Takes array of profiles and returns an Array of Card elements
function createCardElements(profiles) {
  return profiles.map(profile => <Card key={profile.id} {...profile} />);
}

// Calls the profile props and renders the Card elements
const CardList = ({ profiles }) => {
  const cardElements = createCardElements(profiles);
  return <div>{cardElements}</div>;
};

export default CardList;

 
  
  
  
  
  