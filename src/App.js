import logo from './logo.svg';
import './App.css';
import C01component from './Componentes/C01component';
import C02contador from './Componentes/C02contador';
import C03dobleestado from './Componentes/C03dobleestado';
import C04variable from './Componentes/C04variable';
import C05operadorTerr from './Componentes/C05operador';
import C06matriz from './Componentes/C06matriz';
import C07matrizOperaciones from './Componentes/C07matrizOperaciones';

function App() {
  return (
    <div>
      <h1>Componente 6</h1>
     <C06matriz/>

     <h1>Componente 4</h1>
     <C04variable xVariable= "Hoy es viernes"/>

     <h1>Componente 2</h1>
     <C02contador/>

     <h1>Componente 1</h1>
     <C01component/>

     
    </div>
  );
}

export default App;
