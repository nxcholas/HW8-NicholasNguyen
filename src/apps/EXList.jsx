import React, {useState} from "react";
import EX1 from '../apps/EX1'
import EX2 from "../apps/EX2";
import EX3 from '../apps/EX3';
import EX4 from '../apps/EX4';
import '../css/EXList.css';

function List () {
  // store apps in array
  const apps = [
    {name: "EX1", component: <EX1></EX1>},
    {name: "EX2", component: <EX2></EX2>},
    {name: "EX3", component: <EX3></EX3>},
    {name: "EX4", component: <EX4></EX4>}
  ]
  // tracking active app
  const [currentApp, setCurrentApp] = useState(0);

  // switch apps
  const nextApp = () => {
    setCurrentApp((prevApp)=> (prevApp + 1) % apps.length);
  }

  const prevApp = () => {
    setCurrentApp((prevApp) => prevApp === 0 ? apps.length -1 : prevApp -1);
  }
  return (
    <>
      <div id="heading-container">
        <div id="heading-content-container">
          <button id="prev-button" onClick={prevApp}>◀</button>
          <h1 id="heading-title">{apps[currentApp].name}</h1>
          <button id="next-button" onClick={nextApp}>▶</button>
        </div>
      </div>
      {apps[currentApp].component}
    </>
  )
}

export default List