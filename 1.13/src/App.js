import { useState } from 'react'

const Button = (props) => {
  return(
    <>
    <button onClick={props.action}>{props.name}</button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  //We create a new empty array filled with 0 as many times as anecdotes we got, dynamically, to avoid hardcoded values.
  const init = []
  for (let index = 0; index < anecdotes.length; index++) {
    init.push(0)   
  }
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(init)

  const setAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * (anecdotes.length - 1));
    if(randomNumber === selected){
      setAnecdote();
    } else{
      setSelected(randomNumber);
    }
  }

  const addVote = () => {
    let newVotes = [...votes];
    newVotes[selected] = newVotes[selected] + 1;
    setVotes(newVotes);
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button action={addVote} name={"Vote"}></Button>
      <Button action={setAnecdote} name={"Next Anecdote"}></Button>
    </div>
  )
}

export default App