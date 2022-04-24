import { useState } from 'react'

const Statistic = ( { text,value } ) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({stats}) => {
  if(stats.total.value === 0) return (<tr> No feedback given </tr>);
  return (
    Object.keys(stats).map( (key,id) => <Statistic key={id} text={stats[key].text} value={stats[key].value}/> )
  );
}

const Button = ({text,handleClick}) => <button onClick={handleClick}>{text}</button> ;

const App = () => {
  // save clicks of each button to its own state
  const [total, setTotal] = useState(0);
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good+1);
    setTotal(total+1);
  }
  const handleNeutral = () => {
    setNeutral(neutral+1);
    setTotal(total+1);
  }
  const handleBad = () => {
    setBad(bad+1);
    setTotal(total+1);
  }

  const stats = {
    good:{
      text: 'Good',
      value: good
    },
    neutral:{
      text: 'Neutral',
      value: neutral
    },
    bad:{
      text: 'Bad',
      value: bad
    },
    total:{
      text: 'Total',
      value: total
    },
    average:{
      text: 'Average',
      value: ((good-bad)/total).toFixed(2)
    },
    positive:{
      text: 'Positive',
      value: ((good/total)*100).toFixed(2) + '%'
    },
  };

  return (
    <div>
      <h3>give feedback</h3>
      <Button text={'Good'} handleClick={handleGood} />
      <Button text={'Neutral'} handleClick={handleNeutral} />
      <Button text={'Bad'} handleClick={handleBad} />
      <h3>Statistics</h3>
      <table>
        <tbody>
          <Statistics stats = {stats}/>
        </tbody>
      </table>
    </div>
  )
}

export default App