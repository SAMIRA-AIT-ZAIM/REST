// src/EditCompte.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditCompte = () => {
    const { id } = useParams(); // Récupère l'ID du compte dans l'URL
    const navigate = useNavigate();

    const [solde, setSolde] = useState('');
    const [dateCreation, setDateCreation] = useState('');
    const [type, setType] = useState('');

    // Charger les données du compte à modifier
    useEffect(() => {
        axios.get(`http://localhost:8082/api/comptes/${id}`)
            .then((response) => {
                const compte = response.data;
                setSolde(compte.solde);
                setDateCreation(compte.dateCreation);
                setType(compte.type);
            })
            .catch((error) => {
                console.error('Erreur lors du chargement du compte à modifier', error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedCompte = { solde, dateCreation, type };
            const response = await axios.put(`http://localhost:8082/api/comptes/${id}`, updatedCompte);
            console.log('Compte modifié :', response.data);
            alert('Compte modifié avec succès !');
            navigate('/');  // Redirige vers la page principale après la modification
        } catch (error) {
            console.error('Erreur lors de la modification du compte :', error);
            alert('Échec de la modification du compte.');
        }
    };

    return (
        <div>
            <h2>Modifier le Compte</h2>
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
                <button type="submit">Modifier</button>
            </form>
        </div>
    );
};

export default EditCompte;
