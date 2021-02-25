import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';
import fbAppli from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCq8AIp4VBWtww6QRA2uaU2q_zcZ8CYlHY",
    authDomain: "panier-achats.firebaseapp.com",
    databaseURL: "https://panier-achats-default-rtdb.firebaseio.com",
    projectId: "panier-achats",
    storageBucket: "panier-achats.appspot.com",
    messagingSenderId: "786866074949",
    appId: "1:786866074949:web:7639a88b313fe92600ba2c"
  };

// Firebase - Firestore (https://firebase.google.com/docs/firestore)
// Étape 1: initialiser le service Firebase et le produit firestore
if (!fbAppli.apps[0])
{
    fbAppli.initializeApp(firebaseConfig);
}

const bd = fbAppli.firestore();

// Étape 2 : Utiliser l'API firestore

// Ex A: écrire des documents dans la collection "produits"
// tabProduits.forEach(
//     prd => bd.collection("produits").add(prd).then(
//         refDoc => console.log("Id du document ajouté : ", refDoc.id)
//     )
// );


// Ex B: lire des données dans une "collection"
// bd.collection("produits").where("prix", ">", 13).get().then(
//     reponse => {
//         reponse.forEach(
//             doc => console.log("Produit dont le prix est plus grand que 13$ : ", doc.data())
//         )
//     }
// );

// Ex C: Observer les données en temps réel
/*let observerProduits = */ bd.collection("produits").onSnapshot(
    vue => vue.docChanges().forEach(
        changement => {
            if(changement.type == "added"){
                console.log(changement.doc.data());
            }
        }
    )
);

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