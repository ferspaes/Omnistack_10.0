import React, { useState} from 'react';
import Header from './Header';

// Componente = Bloco isolado de HTML, CSS, JavaScript, o qual não interfere no restante da aplicação.
// Propriedade = Informações que um componente pai passa para um componente filho.
// Estado =  Informações mantidas pelo componente (Lembrar: imutabilidade).



function App() {

  const [counter, setCounter] = useState(0);
  
  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
