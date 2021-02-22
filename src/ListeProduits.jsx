import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';
import fbAppli from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCq8AIp4VBWtww6QRA2uaU2q_zcZ8CYlHY",
    authDomain: "panier-achats.firebaseapp.com",
    projectId: "panier-achats",
    storageBucket: "panier-achats.appspot.com",
    messagingSenderId: "786866074949",
    appId: "1:786866074949:web:7639a88b313fe92600ba2c"
  };

export default function ListeProduits(props)
{
    return(
        <>
            <div className="ListeProduits"> 
                <h2>Produits disponobles</h2>
                <ul>
                    {/* Generer des produits à partir du .JSON */}

                    {tabProduits.map( produit => 
                        <Produit etatPanier={props.etatPanier} nom={produit.nom} prix={produit.prix} id={produit.id} key={produit.id} />
                    )}

                </ul>
            </div>
        </>
    );
}