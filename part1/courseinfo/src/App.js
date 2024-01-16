const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  /**forma corta de Title
  const Title = ({course})=><h1>{course}</h1>*/
  const Title = (props)=> {
    return <h1>{props.course}</h1>
  }
  const Parrafo = (props)=>{
    return <p>
    {props.part} {props.exercises}
    </p>
  }
   
  return (
    <div>
      <Title course={course}/>
      <Parrafo part={part1} exercises={exercises1}/>
      <Parrafo part={part2} exercises={exercises2}/>
      <Parrafo part={part3} exercises={exercises3}/>
      <Parrafo part={"Number of exercises"} exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App