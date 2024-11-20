// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCompte from './AddCompte';
import CompteList from './CompteList';
import EditCompte from './EditCompte'; // Importation du composant EditCompte
import './App.css'; // Importation du fichier CSS

const App = () => {
    return (
        <Router>
            <div>
                <h1>Gestion des Comptes</h1>
                <Routes>
                    <Route path="/" element={<CompteList />} />
                    <Route path="/ajouter" element={<AddCompte />} />
                    <Route path="/modifier/:id" element={<EditCompte />} /> {/* Route pour la modification */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
