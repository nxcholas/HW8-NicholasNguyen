import '../css/EX3.css'
import { useEffect } from 'react'

function EX3 () {
  const data = {
    name: "Nicholas Nguyen",
    countries: [
      {
        name: "Japan",
        year: 2022
      },
      {
        name: "Europe",
        year: 2021
      },
      {
        name: "UK",
        year: 2021
      }
    ]
  };
  
useEffect(() => {
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err.message);
    })
}, [])

  return (
    <div
      id='ex3-container'>
        <h2>Check console for output.</h2>

      </div>
  )
}

export default EX3