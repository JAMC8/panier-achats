import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <div className="logo">
                <Link to="/">
                    MagasinLogo
                </Link>
            </div>
            <ul className="navPrincipale">
                <li><Link to="/nos-produits">Produits</Link></li>
                <li><Link to="/a-propos-de-nous">À propos de nous</Link></li>
                <li><Link to="/contactez-nous">Contactez-nous</Link></li>
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

