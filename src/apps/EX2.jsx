import '../css/EX2.css'
import { useState } from 'react';

function EX2 () {
  const [username, setUsername] = useState('');

  const fetchUser = async (username) => {
    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(userData => {
      const userImg = document.getElementById('ex2-userImg');
      const nameOutput = document.getElementById('ex2-name-output');
      const blogOutput = document.getElementById('ex2-blog-output');
      const createdOutput = document.getElementById('ex2-created-output');

      userImg.setAttribute('src', userData.avatar_url);
      nameOutput.textContent = userData.login;
      if (userData.blog) {
        blogOutput.textContent = userData.blog;
      } else {
        blogOutput.textContent = 'null';
      }
      createdOutput.textContent = userData.created_at;
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  const handleLookup = (e) => {
    e.preventDefault();
    fetchUser(username);
  }

  return (
    <div
      id="ex2-container">
        <h2>Information about a GitHub user</h2>
        <div
          id='lookup-container'>
            <input
              id='ex2-userinput'
              onChange={(e) => setUsername(e.target.value)}
              type='text'
              placeholder='Enter a username'></input>
              <button
                id='ex2-btn'
                onClick={handleLookup}>Lookup</button>
          </div>
          <img
            id='ex2-userImg'
            height={200}
            width={200}></img>
          <table>
            <tr id='ex2-name-container'>
              <td id='ex2-name-label'>Name</td>
              <td id='ex2-name-output'>null</td>
            </tr>
            <tr id='ex2-blog-container'>
              <td id='ex2-blog-label'>Blog</td>
              <td id='ex2-blog-output'>null</td>
            </tr>
            <tr id='ex2-created-container'>
              <td id='ex2-created-label'>Created</td>
              <td id='ex2-created-output'>null</td>
            </tr>
          </table>
      </div>
  )
}

export default EX2