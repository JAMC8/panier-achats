import './Appli.scss';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';
import useLocalStorageState from './hooks/useLocalStorageState.js';
import {Switch , Route} from 'react-router-dom';
import Accueil from './Accueil';
import Apropos from './Apropos';
import Contact from './Contact';

function Appli() {
  
  const etatPanier = useLocalStorageState({}, "panier");
  
  // <Route path="/" component={Accueil} exact>

  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier} />
      <section className="contenuPrincipal">

        <Switch>
          <Route path="/" exact> 
            <Accueil/>
          </Route>
          <Route path="/nos-produits">
            <ListeProduits etatPanier={etatPanier} />
          </Route>
          <Route path="/a-propos-de-nous" >
            <Apropos />
          </Route>
          <Route path="/contactez-nous" >
            <Contact/>
          </Route>
        </Switch>

      </section>
      <PiedDePage />
    </div>
  );
}

export default Appli;
