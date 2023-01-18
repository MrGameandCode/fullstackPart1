import { useState } from 'react'

const Button = (props) => {
  return(
    <>
    <button onClick={props.action}>{props.name}</button>
    </>
  )
}

const MostVoted = (props) => {
  let maxVotedIndex = 0;
  let maxVotedVotes = 0;
  for (let index = 0; index < props.votes.length; index++) {
    if(props.votes[index] >= maxVotedVotes){
      maxVotedIndex = index;
      maxVotedVotes = props.votes[index];
    }
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[maxVotedIndex]}</p>
      <p>has {props.votes[maxVotedIndex]} votes</p>
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
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button action={addVote} name={"Vote"}></Button>
      <Button action={setAnecdote} name={"Next Anecdote"}></Button>
      <MostVoted anecdotes={anecdotes} votes={votes}></MostVoted>
    </div>
  )
}

export default App