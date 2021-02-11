import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props)
{
    return(
        <>
            <div className="ListeProduits"> 
                <h2>Produits disponobles</h2>
                <ul>
                    {/* Generer des produits à partir du .JSON */}

                    {tabProduits.map( produit => 
                        <Produit key={produit.id} nom={produit.nom} prix={produit.prix} id={produit.id}/>
                    )}

                </ul>
            </div>
        </>
    );
}