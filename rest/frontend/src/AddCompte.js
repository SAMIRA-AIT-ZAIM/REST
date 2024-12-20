// src/AddCompte.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCompte = () => {
    const [solde, setSolde] = useState('');
    const [dateCreation, setDateCreation] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newCompte = { solde, dateCreation, type };
            const response = await axios.post('http://localhost:8082/api/comptes', newCompte);
            console.log('Compte ajouté :', response.data);
            alert('Compte ajouté avec succès !');
            setSolde('');
            setDateCreation('');
            setType('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du compte :', error);
            alert('Échec de l\'ajout du compte.');
        }
    };

    return (
        <div>
            <h2>Ajouter un Compte</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Solde :</label>
                    <input
                        type="number"
                        value={solde}
                        onChange={(e) => setSolde(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Date de création :</label>
                    <input
                        type="date"
                        value={dateCreation}
                        onChange={(e) => setDateCreation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Type de Compte :</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">-- Sélectionner --</option>
                        <option value="COURANT">Courant</option>
                        <option value="EPARGNE">Épargne</option>
                    </select>
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddCompte;
