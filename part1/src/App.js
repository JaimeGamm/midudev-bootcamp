import './App.css';
import Mensaje from './Mensaje.js';

function App() {
  return(
    <div className="App">
      <Mensaje color = 'red'  message = 'Estamos trabajando' />
      <Mensaje color = 'yellow' message = 'En curso' />
      <Mensaje color = 'blue' message = 'De React' />
    </div>
  )
}

export default App;
