import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) 
{
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
                    <Badge badgeContent={3} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    )
}

export default Entete;