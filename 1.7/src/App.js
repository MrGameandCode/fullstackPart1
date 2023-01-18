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

  const Average = ()  => {
    if(good + neutral + bad === 0){
      return (
        <>
          <p>Average:<span>0</span></p>
        </>
      )
    } else{
      return (
        <>
          <p>Average:<span>{(good - neutral) / (good + neutral + bad)}</span></p>
        </>
      )
    }
  }

  const Positive = ()  => {
    if(good + neutral + bad === 0){
      return (
        <>
          <p>Positive:<span>0%</span></p>
        </>
      )
    } else{
      return (
        <>
          <p>Positive:<span>{(good * 100) / (good + neutral + bad)}%</span></p>
        </>
      )
    }
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
      <p>All:<span>{good + neutral + bad}</span></p>
      <Average></Average>
      <Positive></Positive>
      </div>
    </div>
  )
}

export default App