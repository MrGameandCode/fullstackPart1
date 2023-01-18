import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => {
    var plusGood = good;
    plusGood++;
    setGood(plusGood);
  }

  const setNeutralValue = () => {
    var plusNeutral = neutral;
    plusNeutral++;
    setNeutral(plusNeutral);
  }

  const setBadValue = () => {
    var plusBad = bad;
    plusBad++;
    setBad(plusBad++);
  }
  

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={setGoodValue}> Good</button>
      <button onClick={setNeutralValue}> Neutral</button>
      <button onClick={setBadValue}> Bad</button>
      <div>
      <h2>Statistics</h2>
      <p>Good:<span>{good}</span></p>
      <p>Neutral:<span>{neutral}</span></p>
      <p>Bad:<span>{bad}</span></p>
      </div>
    </div>
  )
}

export default App