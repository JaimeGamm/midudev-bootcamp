const Mensaje = (props) => {
    console.log(props);
    return <h1 style ={{color: props.color}}>
    {props.message}
    </h1>; // Corregir el uso de props.message
  };
  
  export default Mensaje