const Header = (props) => <h1>{props.course}</h1>

const Part = ({name, exercises}) => {
  return <p> {name} {exercises}</p>
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map( (part,id) => (
        <Part key={id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
}
const Total = ({ parts }) => {
  return (
    <>
      <p>Number of Exercises {parts.reduce((ac,part) => ac + part.exercises,0)}</p>
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 10
      }
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;