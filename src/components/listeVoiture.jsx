import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';

export default function Liste() {

    const [voitures, setVoiture] = useState([]);

    const listeDesVoitures = async () =>{
        const {data} = await axios.get('http://localhost:4000/afficher/voiture');
        setVoiture(data);
    }

    useEffect(() => {
        listeDesVoitures();
    },[])
    console.log('Resultat:', voitures)
    return (
        <div className="container" style={{marginTop: '20px'}}>
            <h1>Voici la liste des voitures</h1>
            <a href='/enregistrerUneVoiture'>enregistrer une voiture</a>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        voitures.map((voiture, index) => (
                            <tr>
                            <th>{voiture.id}</th>
                            <td>{voiture.marque}</td>
                            <td>{voiture.m}</td>
                            <td>@mdo</td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )
};