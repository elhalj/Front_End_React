import Formulaire from './components/formulaire';
import './App.css';
import { useState } from 'react';

function App() {
  const [click, setClick] = useState({ modele: "", marque: "", immatriculation: "", });

  async function ajouter(req, res) {
    try {
      const ajouter = await axios.post("localhost:4000/ajouter/voiture")
      console.log(ajouter.data)
      setClick(click)
    } catch (error) {
      res.status(500)
    }
  }
  return (
    <div className="App">
      <Formulaire onChange={ajouter} />
    </div>
  );
}

export default App;
