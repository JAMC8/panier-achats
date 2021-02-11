import'./BtnAjoutPanier.scss';
import {Badge} from '@material-ui/core';

export default function BtnAjoutPanier(props)
{
    return(
        
        <Badge badgeContent={0} color="primary">
            <button className="BtnAjoutPanier">
                Ajouter au panier
            </button>
        </Badge>
    );
}