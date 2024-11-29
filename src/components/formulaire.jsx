
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Formulaire = ({ onChange }) => {

    return (
        <div className='container'>
            <h1>Formulaire</h1>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Model</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Marque</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Couleur</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Immatriculation</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-primary">Enregistrer</button>

            </form>
        </div>
    )
}

export default Formulaire;