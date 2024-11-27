
import { useState } from 'react';
import '../css/formulaire.css'
const Formulaire = ({onChange}) => {
    const [change, setChange] = useState(()=>{setChange(change)})
    return(
        <div className="formulaire">

            <h1>Ajouter information sur la voitre</h1>
            <form action={onChange}>
                <div>
                    <label htmlFor="">
                        Marque :
                    </label>
                    <input type="text" placeholder="Votre nom" />
                </div>
                <div>
                    <label htmlFor="">
                        Model :
                    </label>
                    <input type="text" placeholder="Le modele" />
                </div>
                <div>
                    <label htmlFor="">
                        couleur :
                    </label>
                    <input type="text" placeholder="la couleur" />
                </div>
                <div>
                    <label htmlFor="">
                        Immatriculation :
                    </label>
                    <input type="text" placeholder="l'immatriculation" />
                </div>
            </form>
        </div>
    )
}

export default Formulaire;