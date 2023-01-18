import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
    <Average neutral={props.neutral} good={props.good} bad={props.bad}></Average>
    <Positive neutral={props.neutral} good={props.good} bad={props.bad}></Positive>
    </>
  )
}

const Average = (props)  => {
  if(props.good + props.neutral + props.bad === 0){
    return (
      <>
        <p>Average:<span>0</span></p>
      </>
    )
  } else{
    return (
      <>
        <p>Average:<span>{(props.good - props.neutral) / (props.good + props.neutral + props.bad)}</span></p>
      </>
    )
  }
}

const Positive = (props)  => {
  if(props.good + props.neutral + props.bad === 0){
    return (
      <>
        <p>Positive:<span>0%</span></p>
      </>
    )
  } else{
    return (
      <>
        <p>Positive:<span>{(props.good * 100) / (props.good + props.neutral + props.bad)}%</span></p>
      </>
    )
  }
}

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
      <p>All:<span>{good + neutral + bad}</span></p>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    </div>
  )
}

export default App