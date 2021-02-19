import BtnAjoutPanier from './BtnAjoutPanier';
import './Produit.scss';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';

export default function Produit({nom, prix, id, etatPanier}) 
{
    const [panier, setPanier] = etatPanier;

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

        setPanier(JSON.parse(JSON.stringify(panier))); //{...panier}
    }

    let qte = 0;
    let texte = "Ajouter au panier";
    let classeCss = "";
    if(panier[id])
    {
        qte = panier[id].qte;
        texte = <AddCircleOutlineIcon />;
        classeCss = "rouge";
    }

    //Changement dans <p> nom et prix props.nom props.prix
    return(
        <li className="Produit">
            <img src={"images-produits/" + id + '.webp'} alt=""/>
            <div className="info">
                <p className="nom">{nom}</p>
                <p className="prix">{prix}</p> 
            </div>
            <BtnAjoutPanier onClick={ajouterPanier} qte={qte} texte={texte} classeCss={classeCss} />
        </li>
    )
}