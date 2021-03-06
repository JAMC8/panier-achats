import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import SommairePanier from './SommairePanier';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Entete({etatPanier}) 
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
                <NavLink to="/" activeClassName="navActive" exact>
                    MagasinLogo
                </NavLink>
            </div>
            <ul className="navPrincipale">
                <li><NavLink to="/nos-produits" activeClassName="navActive">Produits</NavLink></li>
                <li><NavLink to="/a-propos-de-nous" activeClassName="navActive">À propos de nous</NavLink></li>
                <li><NavLink to="/contactez-nous" activeClassName="navActive">Contactez-nous</NavLink></li>
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


