import '../css/EX1.css'
import { useEffect } from 'react'

function EX1 () {
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
      .then(response => response.json())
      .then(paintings => {
        paintings.forEach(painting => {
          const container = document.getElementById('paintings');
          const row = document.createElement('tr');
          const name = document.createElement('th');
          const year = document.createElement('th');
          const artist = document.createElement('th');

          name.textContent = painting.name;
          year.textContent = painting.year;
          artist.textContent = painting.artist;

          row.append(name, year, artist);
          container.append(row);
        })
      })
      .catch(err => {
        console.log(err.message);
      })
  }, [])

  return (
    <div
      id='ex1-container'>
        <h2>Some famous paintings</h2>
          <table id="paintings">
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Artist</th>
            </tr>
          </table>
      </div>
  )
}

export default EX1