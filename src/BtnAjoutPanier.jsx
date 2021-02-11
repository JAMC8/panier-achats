import'./BtnAjoutPanier.scss';
import { useState } from 'react';
import {Badge} from '@material-ui/core';

export default function BtnAjoutPanier(props)
{

    const [texte, setTexte] = useState("Ajouter au panier");
    const [qte, setQte] = useState(0);

    return(
        
        <Badge badgeContent={qte} color="primary">
            <button onClick={function () {props.onClick(); setTexte('Augmenter'); setQte(qte+1)}} className="BtnAjoutPanier">
                {texte}
            </button>
        </Badge>
    );
}