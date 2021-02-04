import './ListeProduits.css';
import Produit from './Produit';

export default function ListeProduits(props)
{
    return(
        <>
            <h2>Produits disponobles</h2>
            <ul className="ListeProduits">
               <Produit nom="T-Shirt col ron" prix="19.99" id="prd0001"/>
               <Produit nom="Chandail manche long" prix="22.99" id="prd0003"/>
               <Produit nom="Shorts Kaki" prix="25.99" id="prd0006"/>
            </ul>
        </>
    );
}