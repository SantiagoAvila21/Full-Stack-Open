import { useState } from 'react'

const Button = ({text,handleClick}) => <button onClick={handleClick}>{text}</button> ;

const Anecdote = ({anecdote, numvotes}) => {
  return(
    <p>{anecdote} <br/> has {numvotes} votes</p>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const initialVotes = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(initialVotes);
  const [mostVoted, setMostVoted] = useState(0);

  const handleRandomQuote = () => setSelected(Math.floor(Math.random() * 7));
  const handleVotes = () => {
    console.log(votes);
    setVotes((prev) => {
      const updated = [...prev];
      updated[selected] = prev[selected] + 1;
      // Get index of the most voted anecdote
      setMostVoted(updated.indexOf(Math.max(...updated)));
      return updated;
    });
  };

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <Anecdote anecdote={anecdotes[selected]} numvotes={votes[selected]}></Anecdote>
      <Button text={"Vote"} handleClick={handleVotes}></Button>
      <Button text={"Next Anecdote"} handleClick={handleRandomQuote} />
      <h3>Anecdote with most votes</h3>
      <Anecdote anecdote={anecdotes[mostVoted]} numvotes={votes[mostVoted]}></Anecdote>
    </div>
  )
}

export default App