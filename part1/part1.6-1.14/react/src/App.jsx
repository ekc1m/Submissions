import { useState } from 'react'

const Header = ({ header }) => <h1>{header}</h1>

const Button = ({ handleClick, name }) => <button onClick={handleClick}>{name}</button>

const Statistics = ({ goodPoints, neutralPoints, badPoints}) => {
  return (
    <div>
      <p>good {goodPoints}</p>
      <p>neutral {neutralPoints}</p>
      <p>bad {badPoints}</p>
    </div>
  )
}

const All = ({ _all }) => <div>all {_all}</div>

const Average = ({ _average }) => {
  if (isNaN(_average)) {
    return (
      <div>average 0</div>
    )
  }
  return (
    <div>average {_average}</div>
  )
}

const Positive = ({ _positive}) => {
  if (isNaN(_positive)) {
    return (
      <div>positive 0 %</div>
    )
  }
  return (
    <div>positive {_positive} %</div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const all = good + neutral + bad
  const calcAvg = average / all
  const positiveInPercent = positive / all * 100

  const handleGoodClick = () => {
    let newGood = good + 1
    setPositive(positive + 1)
    setAverage(average + 1)
    setGood(newGood)
    console.log('good', newGood)
  }

  const handleNeutralClick = () => {
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
    console.log('neutral', newNeutral)
  }

  const handleBadClick = () => {
    let newBad = bad + 1
    setAverage(average - 1)
    setBad(newBad)
    console.log('bad', newBad)
  }

  return (
    <>
    <div>
      <Header header="give feedback" />
      <Button name="good" handleClick={handleGoodClick} />
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>
      <Header header="statistics" />
      <Statistics goodPoints={good} neutralPoints={neutral} badPoints={bad}/>
      <All _all={all} />
      <Average _average={calcAvg} />
      <Positive _positive={positiveInPercent} />
    </div>
    </>
  )
}

export default App
