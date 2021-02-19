import {useState, useEffect} from 'react';

export default function useLocalStorageState(valeurParDefault, etiquetteLS)
{
    const [etat, setEtat] = useState(
        () => {
            return JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurParDefault;
        }
    );

    useEffect(() => window.localStorage.setItem(etiquetteLS, JSON.stringify(etat)), [etat]);

    return[etat, setEtat];
        
}