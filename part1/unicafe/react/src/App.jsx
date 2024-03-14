/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({ handleClick, name }) => <button onClick={handleClick}>{name}</button>

const StatisticLine = ({ _name, _value}) => {
  return (
    <tr>
      <td>{_name}</td>
      <td>{_value}</td>
    </tr>
  )
}

const Statistics = ({ goodPoints, neutralPoints, badPoints}) => {
  const all = goodPoints + neutralPoints + badPoints
  const average = (goodPoints - badPoints) / all
  const positive = goodPoints / all * 100

  if (all === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
    }

  return (
    <div>
      <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine _name='good' _value={goodPoints} />
            <StatisticLine _name='neutral' _value={neutralPoints} />
            <StatisticLine _name='bad' _value={badPoints} />
            <StatisticLine _name='all' _value={all} />
            <StatisticLine _name='average' _value={average} />
            <StatisticLine _name='positive' _value={positive + ' %'} />
        </tbody>
      </table>
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

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
      <h2>give feedback</h2>
      <Button name="good" handleClick={handleGoodClick} />
      <Button name="neutral" handleClick={handleNeutralClick}/>
      <Button name="bad" handleClick={handleBadClick}/>
      <Statistics goodPoints={good} neutralPoints={neutral} badPoints={bad}/>
    </div>
    </>
  )
}

export default App
