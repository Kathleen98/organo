import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CompoTexto';

function App() {
  return (
    <div className="App">
    <Banner />
    <CampoTexto label="Personagem" placeholder="Digite seu nome" />
    <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
    <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
