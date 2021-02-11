import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) 
{
    //console.log(props);
    return(
        <li className="Produit">
            <img src={"images-produits/" + props.id + '.webp'} alt=""/>
            <div className="info">
                <p className="nom">{props.nom}</p>
                <p className="prix">{props.prix}</p>
            </div>
            <BtnAjoutPanier />
        </li>
    )
}