import { useState } from 'react';

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ];

    //declaring a new state variable 'votes'
    //setting the initial state of votes for each anecdore in the array to 0:w
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

    //declaring a new state variable 'selected'
    //this sets the initial state of selected to 0
    const [selected, setSelected] = useState(0);

    //this function generates a random number between 0 and the length of anecdotes arr
    //and sets the value of 'selected' to the random number
    //this is then called in the onClick listener
    const generateAnecdote = () => {
        const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomAnecdote);
        console.log('generateAnecdote randomAnecdote', randomAnecdote);
    };

    //this is a function that increments the votes for current anecdote
    const voteAnecdote = () => {
        console.log('voteAnecdote selected', selected);
        const newVotes = [...votes];
        newVotes[selected] += 1;
        setVotes(newVotes);
    };

    //variable that takes the index of most voted anecdote
    const mostVoted = votes.indexOf(Math.max(...votes));
    console.log('mostVoted index', mostVoted);
    
    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes </p>
            <button onClick={voteAnecdote}>vote</button>
            <button onClick={generateAnecdote}>next anecdote</button>     
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVoted]}</p>
            <p>which has {votes[mostVoted]} votes</p>
        </div>
    );
};

export default App;
