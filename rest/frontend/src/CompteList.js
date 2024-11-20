// src/CompteList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CompteList = () => {
    const [comptes, setComptes] = useState([]);

    useEffect(() => {
        // Récupérer les données depuis l'API
        axios.get('http://localhost:8082/api/comptes')
            .then((response) => {
                console.log('Comptes récupérés depuis l\'API :', response.data); // Affichage dans la console
                setComptes(response.data); // Mise à jour de l'état avec les données
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des comptes', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8082/api/comptes/${id}`)
            .then(() => {
                setComptes(comptes.filter(compte => compte.id !== id));
                console.log('Compte supprimé', id); // Affichage dans la console lors de la suppression
            })
            .catch((error) => {
                console.error('Erreur lors de la suppression du compte', error);
            });
    };

    return (
        <div>
            <h2>Liste des Comptes</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Solde</th>
                    <th>Date de création</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {comptes.length > 0 ? (
                    comptes.map((compte) => (
                        <tr key={compte.id}>
                            <td>{compte.id}</td>
                            <td>{compte.solde}</td>
                            <td>{compte.dateCreation}</td>
                            <td>{compte.type}</td>
                            <td>
                                <Link to={`/modifier/${compte.id}`}>
                                    <button>Modifier</button>
                                </Link>
                                <button onClick={() => handleDelete(compte.id)}>Supprimer</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">Aucun compte trouvé</td>
                    </tr>
                )}
                </tbody>
            </table>
            <Link to="/ajouter">
                <button>Ajouter un compte</button>
            </Link>
        </div>
    );
};

export default CompteList;
