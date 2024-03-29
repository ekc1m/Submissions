import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const AnecdoteWithMaxVotes = ({ anecdoteWithMaxVotes, amountOfVotes }) => <p>{anecdoteWithMaxVotes}<br />has {amountOfVotes} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let lengthOfAnecdotes = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(lengthOfAnecdotes).fill(0))


  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * lengthOfAnecdotes))
  }

  const handleVoteClick = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
  }

  const maxValue = Math.max(...points)
  const indexOfMax = points.indexOf(maxValue)
  const _anecdoteWithMaxVotes = anecdotes[indexOfMax]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVoteClick} text='Vote' />
      <Button handleClick={handleAnecdoteClick} text='Get random anecdote' />
      <h1>Anecdote with most votes</h1>
      <AnecdoteWithMaxVotes anecdoteWithMaxVotes={_anecdoteWithMaxVotes} amountOfVotes={maxValue} />
    </div>
  )
}

export default App
