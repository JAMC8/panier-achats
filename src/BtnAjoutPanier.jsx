import'./BtnAjoutPanier.scss';
import {Badge} from '@material-ui/core';

export default function BtnAjoutPanier({onClick, qte, texte, classeCss})
{
    return(
        
        <Badge badgeContent={qte} color="primary">
            <button onClick={onClick} className={`BtnAjoutPanier ${classeCss}`}>
                {texte}
            </button>
        </Badge>
    );
}