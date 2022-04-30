import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
    const {name, parts} = course;
    const total = parts.reduce((acc,part) => acc + part.exercises, 0);
    return (
        <>
            <Header text={name}/>
            <Content parts={parts}/>
            <Total exercises={total}/>
        </>
    );
}

export default Course;