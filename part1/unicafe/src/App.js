import { useState } from 'react'

//refactoring statistics to Statistics = (props) => {}


const Button = ({handleClick, text}) => {
    return <button onClick={handleClick}>{text}</button>
};

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
};

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const avg = total !== 0 ? (good - bad) / total : 0;
    const positive = total !== 0 ? (good / total) * 100 : 0;

    if (total === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>

        );
    }

    return (
    <div>
        <h2>Statistics</h2>
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={total} />
                <StatisticLine text="average" value={avg} />
                <StatisticLine text="positive" value={`${positive} %`} />
            </tbody>
        </table>
    </div>
    );
};

const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);

    return (
        <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
  );
}

export default App
