import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) 
{
    const [panier, setPanier] = props.etatPanier;
    

    //Calculer nbr article dans panier
    //const nbArticleDiff = Object.values(panier).length;   
    const valeursPanier = Object.values(panier); 
    // let totalArticles = 0;
    // for(let i = 0; i < valeursPanier.length; i++)
    // {
    //     totalArticles += valeursPanier[i].qte;        
    // }

    //Calculer nbr total d'articles avec reduce()
    // const totalArticles2 = valeursPanier.reduce(function(valInit, valCourante){
    //     return valInit + valCourante.qte;
    // }, 0);

    // OU
    
    // const totalArticles2 = valeursPanier.reduce(
    //     (valInit, valCourante) => valInit + valCourante.qte
    // , 0);

    // OU mettre dans <Badge>

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
                    <Badge badgeContent={valeursPanier.reduce((valInit, valCourante) => valInit + valCourante.qte, 0)} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    )
}

export default Entete;