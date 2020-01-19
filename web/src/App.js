import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';
import DevItem from './components/DevItem';
import './components/DevItem/styles.css';
import './components/DevForm';
import DevForm from './components/DevForm';

// Componente = Bloco isolado de HTML, CSS, JavaScript, o qual não interfere no restante da aplicação.
// Propriedade = Informações que um componente pai passa para um componente filho.
// Estado =  Informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data)
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){
    
    const response = await api.post('/devs', data);

    console.log(response.data);

    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data)
    }

    loadDevs();
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        
        <DevForm onSubmit={handleAddDev}/>

      </aside>

      <main>
        <ul>

          {devs.map(dev => (

            <DevItem key={dev._id} dev={dev} />

          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
