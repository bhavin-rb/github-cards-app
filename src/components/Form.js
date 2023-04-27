import React from 'react';
import axios from 'axios';

// The Form function accepts an onSubmit prop, 
// which is a function that handles the submission of the form.

function Form({ onSubmit }) {
  // This state variable is used to store the input value entered by the user.
    const [userInput, setUserInput] = React.useState('');

    // This function is called when the user enters a value in the input field.
    const handleInputChange = (event) => {
      setUserInput(event.target.value);
      
    };
    // This function is called when the user submits the form.
    const handleSubmit = async (event) => {
      // Prevent the browser from refreshing the page when the form is submitted.
      event.preventDefault();
      try {
        const response = await axios.get(`https://api.github.com/users/${userInput}`);
        // Pass the response data to the onSubmit prop.
        onSubmit(response.data);
        setUserInput('');
      } catch (error) {
        console.log(error);
      }
    };
   
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Github username"
                value={userInput}
                required
                onChange={handleInputChange}
            />
            <button>Add card</button>
        </form>
    )
    
}

export default Form;