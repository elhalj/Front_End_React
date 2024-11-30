

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
const Formulaire = ({ onChange }) => {

    const [ajouter,setAjouter] = useState([{modele:"", marque:"", couleur:"", immatriculation:""}]);

    const handleChange = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        const {data} = await axios.post('http://localhost:4000/ajouter/voiture',FormData);
        setAjouter(data)
    }

    useEffect(() => {
        handleChange(ajouter);
    },[ajouter])

    console.log("Voici ce que vous avez taper: ", ajouter)

    return (
        <div className='container'>
            <h1>Formulaire</h1>
            <a href='/afficherListeDesVoitures'>Afficher la liste des voitures</a>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Model</label>
                            <input type="email" name='modele' value={setAjouter.modele} class="form-control" id="exampleFormControlInput1" placeholder="Entrer le modele"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Marque</label>
                            <input type="email" name='marque' value={setAjouter.marque} class="form-control" id="exampleFormControlInput1" placeholder="Entrer la marque"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Couleur</label>
                            <input type="email" name='couleur' value={setAjouter.couleur} class="form-control" id="exampleFormControlInput1" placeholder="Entrer la couleur"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Immatriculation</label>
                            <input type="email" name='modele' value={setAjouter.immatriculation} class="form-control" id="exampleFormControlInput1" placeholder="Entrer l'immatriculation"/>
                        </div>
                    </div>
                </div>
                <button type="button" onChange={handleChange} class="btn btn-primary">Enregistrer</button>

            </form>
        </div>
    )
}

export default Formulaire;