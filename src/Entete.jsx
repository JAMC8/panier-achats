import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';

function Entete({etatPanier}) 
{
    const [panier] = etatPanier;
    //Calculer nbr article dans panier
    //const nbArticleDiff = Object.values(panier).length;   
    const valeursPanier = Object.values(panier); 
    const [sommaireAffichable, setSommaireAffichable] = useState(false);

    function basculerAffichageSommairePanier()
    {
        setSommaireAffichable(!sommaireAffichable);
    }

    return (
        <header className="Entete">
            <div className="logo">MagasinLogo</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>À propos de nous</li>
                <li>Contactez-nous</li>
            </ul>
            <ul className="navUtilisateur"> 
                <li>
                    Panier d'achats                    
                    <Badge onClick={basculerAffichageSommairePanier} badgeContent={valeursPanier.reduce((valInit, eltCourante) => valInit + eltCourante.qte, 0)} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                    <SommairePanier panier={panier} affichable={sommaireAffichable} />
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    )
}

export default Entete;