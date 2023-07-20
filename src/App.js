import logo from './logo.svg';
import './App.css';
import C01component from './Componentes/C01component';
import C02contador from './Componentes/C02contador';

function App() {
  return (
    <div>
     <h1>Componente 1</h1>
     <C01component/>

     <h2>Componente 2</h2>
     <C02contador/>

     <h3>Componente 3</h3>
     <C03dobleestado/>

    </div>
  );
}

export default App;
