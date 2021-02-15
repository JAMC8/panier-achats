import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';

export default function Produit(props) 
{
    const [panier, setPanier] = props.etatPanier;

    const {nom, prix, id} = props; // Ça veut dire --> const id = props.id;

    function ajouterPanier()
    {
        if(panier[id])
        {
            panier[id].qte++;
        }
        else
        {
            panier[id] = {nom: nom, prix: prix, qte: 1}
        }

        //console.log("Objets: ", panier);
        //console.log("Tableau de valeurs: ", Object.values(panier));

        setPanier(JSON.parse(JSON.stringify(panier))); //{...panier}
    }


    //Changement dans <p> nom et prix props.nom props.prix
    return(
        <li className="Produit">
            <img src={"images-produits/" + props.id + '.webp'} alt=""/>
            <div className="info">
                <p className="nom">{nom}</p>
                <p className="prix">{prix}</p> 
            </div>
            <BtnAjoutPanier onClick={ajouterPanier} />
        </li>
    )
}