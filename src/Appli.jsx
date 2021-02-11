import { useState } from 'react';
import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

function Appli() {
  // Exemple structure panier
  /*let panier = 
  {
    prd0005: { prix: 19.5, qte: 1 },
    prd0002: { prix: 20.5, qte: 3 }
  }*/

  // Gérer l'état avec les "React Hooks"
  // useState va créer une varibale d'état initialisée à {}
  const etatPanier = useState({});
  
  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier} />
      </section>
      <PiedDePage />
    </div>
  );
}

export default Appli;
