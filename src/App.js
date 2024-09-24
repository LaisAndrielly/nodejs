

import ConteudoLateral from './componente/ConteudoLateral';
// import mario from './mario.png'
// import logo from './logo.svg';
import './App.css';

export default function App () {
  return (
    <div className="App">

      <ConteudoLateral/>

      <div className="conteudo lateral">

        <div>logo</div>
        <div>menu
          <ul>
            <li>home</li>
            <li>Pesquisa</li>
            <li>Explorar</li>
            <li>Mensagens</li>
          </ul>
        </div>
      </div>

      <div className=' conteudo principal'>

      </div>


    </div>
  );
  }