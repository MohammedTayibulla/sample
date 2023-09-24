
import React, { useEffect, useState } from 'react';
import axios from "axios"

const C1 = () => {
    const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Make a GET request to your backend API
    fetch('http://localhost:4000/api') // Assuming this is the correct endpoint
      .then((response) => response.json())
      .then((data) => {
        setHtmlContent(data.html);
        console.log(htmlContent)
      })
      .catch((error) => {
        console.error('Error fetching HTML content:', error);
      });
  }, []);

  // Assuming this code is in a React component
  const [user, setUser] = useState({
    myname: '',
    myemail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // Spread the existing user object to retain its other properties
      [name]: value, // Update the specified property
    });
  };
  console.log(user)
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = user
  
    try {
      const response = await fetch('http://localhost:4000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Response from server:', data);
      } else {
        console.error('Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Your React App</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="myname"
            value={user.myname}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="myemail"
            value={user.myemail}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default C1