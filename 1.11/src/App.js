import { useState } from 'react'

const Button = (props)  => {
  return(
    <>
      <button onClick={props.setter}>{props.name}</button>
    </>
  )
}

const Statistics = (props) => {
  if(props.good + props.neutral + props.bad === 0){
    return (
      <>
      <h2>Statistics</h2>
      <p>No feedback given </p>
      </>
    )
  } else{
    return (
      <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine name="Good" value={props.good}></StatisticLine>
          <StatisticLine name="Neutral" value={props.neutral}></StatisticLine>
          <StatisticLine name="Bad" value={props.bad}></StatisticLine>
          <StatisticLine name="All" value={props.good + props.neutral + props.bad}></StatisticLine>
          <StatisticLine name="Average" value={(props.good - props.neutral) / (props.good + props.neutral + props.bad)}></StatisticLine>
          <StatisticLine name="Positive" value={((props.good * 100) / (props.good + props.neutral + props.bad)) + "%"}></StatisticLine>
        </tbody>
      </table>
      </>
    ) 
  }
}

const StatisticLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.name}</td><td>{props.value}</td>
      </tr>
    </>
  )
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
      <Button setter={setGoodValue} name="Good"></Button>
      <Button setter={setNeutralValue} name="Neutral"></Button>
      <Button setter={setBadValue} name="Bad"></Button>
      <div>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </div>
    </div>
  )
}

export default App