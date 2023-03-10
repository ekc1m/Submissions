import { useState } from 'react'

//TODO: refactor statistics to
//const Statistics = (props) => {}

const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    console.log('good = ',good);
    const [neutral, setNeutral] = useState(0);
    console.log('neutral = ', neutral);
    const [bad, setBad] = useState(0);
    console.log('bad = ', bad);

    const total = (good + neutral + bad);
    const avg = total !== 0 ? (good - bad) / total : 0;
    const positive = total !== 0 ? good / total * 100 : 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {avg}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App
