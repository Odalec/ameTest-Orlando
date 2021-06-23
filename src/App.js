import './App.scss';
import CardContainer from './components/cardsContainer';
import Header from './components/header';
import background from "./assets/hogwarts.png";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <Header/>
      <CardContainer/>
    </div>
  );
}

export default App;
