import React from 'react';


// component that renders a "card" displaying information about a GitHub profile.

function Card(props) {
  
    return (
        <div className="github-profile">
            <img src={props.avatar_url} alt="avatar" />
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="company">{props.company}</div>
            </div>
        </div>
    )
}

export default Card;