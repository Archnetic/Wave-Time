import { useState } from 'react'
import './App.css'

function App() {
    const [time, setTime] = useState(0)
    //const [startPosition, setStartPosition] = useState(0)
    const [point, setPoint] = useState('')
    const [points, setPoints] = useState([])
    //const [endPosition, setEndPosition] = useState(0)

    let nextId = 0;
    

    //Set speed of light in m/s
    //const c = 299792458
    //const startPosition = 0 
    //const endPosition = 299792458

    



  return (
    <>
        <h1>Wave Time</h1>
          <div className="card">
            <label htmlFor="addPoint">Add Point:</label>
              <input type="text" id="addPoint" name="addPoint" onInput={(e) => setPoint(e.target.value)} ></input><br></br>

            {/*<label for="endPosition">End Point:</label>*/}
            {/*  <input type="text" id="endPosition" name="endPosition" onInput={(e) => setEndPosition((setEndPosition) => e.target.value)}></input><br></br>*/}

            <label>Total Time: {time} Seconds</label><br></br>

              <button onClick={() => { setPoints([...points, { id: nextId++, point: point }]); }}>Add</button>

              <ul>
                  {points.map(points => (
                      <li key={points.id}>Point {points.id}: {points.point}</li>
                  ))}
              </ul>
{/*            <button onClick={() => setTime()}></button>*/}
        </div>
    </>
  )
}

export default App
