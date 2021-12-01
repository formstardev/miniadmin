import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { 
  ROUTES_Willkommen,
  ROUTES_Renovierungs_Check,
  ROUTES_Checklisten,
  ROUTES_Musterschreiben,
  ROUTES_Vermieter_Anschreiben,
  ROUTES_Anwalt_Fragen,
  ROUTES_Nachrichtenverlauf,
  ROUTES_Hilfe,
  ROUTES_Deine_Mitgliedschaft_Kostenlos
} from '../../constants';
import Willkommen from '../../pages/Willkommen';
import Renovierungs_Check from '../../pages/Renovierungs_Check';
import Checklisten from '../../pages/Checklisten';
import Musterschreiben from '../../pages/Musterschreiben';
import Vermieter_Anschreiben from '../../pages/Vermieter_Anschreiben';
import Anwalt_Fragen from '../../pages/Anwalt-fragen';
import Nachrichtenverlauf from '../../pages/Nachrichtenverlauf';
import Hilfe from '../../pages/Hilfe';
import Deine_Mitgliedschaft_Kostenlos from '../../pages/Deine_Mitgliedschaft_Kostenlos';


export default function LoggedRoute() {

  return (
    <Switch>
      <Route exact path={ROUTES_Willkommen()} component={Willkommen} />
      <Route exact path={ROUTES_Renovierungs_Check()} component={Renovierungs_Check} />
      <Route exact path={ROUTES_Checklisten()} component={Checklisten} />
      <Route exact path={ROUTES_Musterschreiben()} component={Musterschreiben} />
      <Route exact path={ROUTES_Vermieter_Anschreiben()} component={Vermieter_Anschreiben} />
      <Route exact path={ROUTES_Anwalt_Fragen()} component={Anwalt_Fragen} />
      <Route exact path={ROUTES_Nachrichtenverlauf()} component={Nachrichtenverlauf} />
      <Route exact path={ROUTES_Hilfe()} component={Hilfe} />
      <Route exact path={ROUTES_Deine_Mitgliedschaft_Kostenlos()} component={Deine_Mitgliedschaft_Kostenlos} />
    </Switch>
  );
}
