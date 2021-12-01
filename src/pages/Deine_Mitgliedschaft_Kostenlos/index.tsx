import React, { useEffect } from "react";
import { ROUTES_Deine_Mitgliedschaft_Kostenlos } from "../../constants";
import { useLayout } from "../../contexts";
import { Card, Image, Button  } from 'antd';
import './index.css';
import ImageText from "../../components/imageText";
import Heute from "../../components/heute";
import Kunden from "../../components/kunden";
import Mitgliedschaften from "../../components/mitgliedschaften";
export default function Deine_Mitgliedschaft_Kostenlos() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Deine_Mitgliedschaft_Kostenlos())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div className="content">
      <Card style={{ width: '100%',borderRadius:5,height:'auto' }}>
        <div className="membership">
            <div className="mem-1">
              <p className="mem-1-title">Jetzt upgraden für vollen</p>
              <p className="mem-1-title">MieterEngel</p>
              <p className="mem-1-title">Mietrechtsschutz!</p>
            </div>
            <div className="mem-2">
              <img
                src="images/member.png"
                className="mem-image"
              />
            </div>
        </div>
        <div className="sect-2">
          Wir glauben an günstigen und nachhaltigen Mieterschutz für das digitale Zeitalter. Werde jetzt zahlendes Mitglied
          und du erhältst <span className="sect-2-color">Beratung zu all deinen Mietproblemen für einen fairen jährlichen Beitrag</span> - ohne versteckte
          Zusatzkosten. In unserem Pro- und Premium-Paket kannst du dich zusätzlich für zukünftige Gerichtsfälle mit der
          Allianz Mietrechtsschutzversicherung absichern.
        </div>
        <div className="sect-3">
          <div className="sect-3-1">
            <img
                src="images/light.png"
              />
          </div>
          <div className="sect-3-2">
            Jetzt upgraden und du bekommst <span className="sect-3-2-span">eine Antwort von deinem Partneranwalt</span>-
            in der Regel in weniger als 48 Stunden.
          </div>
          <div className="sect-3-3">
            <Button type="primary" block className="btn-1">
              JETZT UPGRADEN
            </Button>
          </div>
        </div>
        <div className="sect-4">
          <div className="sect-title">Direkte Anwaltsberatung online - so oft du sie brauchst:</div>
          <ImageText 
            imgURL="images/1phone.png" 
            title="1. Dokumente hochladen und Problem schildern" 
            des="Über dein Account kannst du einfach und sicher Dokumente
            hochladen oder direkt abfotografieren. Wir prüfen vorab, ob
            alles Notwendige da ist, damit du schnell eine Antwort
            bekommst."
            type={1} />
            <ImageText 
            imgURL="images/2phone.png" 
            title="2. Dein persönlicher Partneranwalt beantwortet alle
            Fragen" 
            des="Er oder sie kennt deinen Fall, berät dich auf Wunsch per
            Nachricht oder zum vereinbarten Termin auch gerne direkt
            am Telefon"
            type={2} />
            <ImageText 
            imgURL="images/3phone.png" 
            title="3. Aufklärung und Handlungsempfehlung" 
            des="Du erhältst eine schriftliche Zusammenfassung (siehe Beispiel)
            mit Handlungsempfehlung in deinem Mieter Engel Account
            und kannst jederzeit Rückfragen stellen."
            type={3} />
        </div>
        <div className="sect-4">
          <div className="sect-title">So funktioniert digitaler Mieterschutz heute:</div>
          <div className="sect-5">
            <div className="sect-5-sub">
              <Heute 
                imgURL="images/wall.png"
                des1="Keine Wartezeiten beim
                Mietverein vor Ort."
                des2="Nach der
                Anmeldung kannst du sofort über
                dein Account Fragen stellen." />
            </div>
            <div className="sect-5-sub">
              <Heute 
                imgURL="images/time.png"
                des1="Fixkosten für all deine Probleme."
                des2="Für den jährlichen Beitrag
                erhältst du Antwort zu all deinen
                Mietproblemen" />
            </div>
            <div className="sect-5-sub">
              <Heute 
                imgURL="images/map.png"
                des1="Deutschlandweiter Mieterschutz."
                des2="Ob Großstadt oder kleine
                Gemeinde, wohnst du zur Miete
                sind wir dein Ansprechpartner." />
            </div>
          </div>
          
        </div>
        <div className="sect-4">
          <div className="sect-title">Das sagen unsere Kunden</div>
          <div className="sect-6">
            <div className="sect-6-sub">
              <Kunden 
                imgURL="images/w1.png"
                name="Romina B."
                str="Ich musste nie lange warten und hatte
                immer einen Ansprechpartner, den ich rund
                um die Uhr anrufen konnte." />
            </div>
            <div className="sect-6-sub">
              <Kunden 
                imgURL="images/w2.png"
                name="Susanne"
                str="Ich habe meinen Mietvertrag prüfen lassen und musste weder streichen, noch etwas anderes tun. Durch die Prüfung habe ich Zeit und Geld gespart." />
            </div>
          </div>
        </div>
        <div className="sect-4">
          <div className="sect-title">Das bieten unsere Mitgliedschaften</div>
          <div className="sect-2">
            Hast du ein derzeitiges Mietproblem zu dem du Rat brauchst? Oder möchtest du bei zukünftigen Streitfällen die
            Gerichtskosten abgedeckt wissen. Mit MieterEngel findest du den passend Mieterschutz für dich.
          </div>
          <div className="sect-7">
            <div className="sect-7-sub">
              <Mitgliedschaften 
                imgURL="images/t1.png"
                des1="Rechtliche Beratung "
                des2=" zu all deinen
                Mietproblemen. "
                des3="Unser MieterEngel
                Team bucht Termine und hilft bei der
                Vorbereitung der Gespräche mit
                deinem Partneranwalt."
                des4=""
                des5=""
                des6=""
                type={1} />
            </div>
            <div className="sect-7-sub">
              <Mitgliedschaften 
                imgURL="images/t2.png"
                des1="Du bekommst sofort eine
                Rechtsberatung durch einen
                Partneranwalt und bist mit"
                des2="Mietrechtsschutzversicherung*"
                des3="für
                künftige Streitfälle abgesichert."
                des4="*Gruppenvertrag mit einer Sperrfrist von 3
                Monaten. Selbstbeteiligung: €150.00."
                des5=""
                des6=""
                type={2} />
            </div>
            <div className="sect-7-sub">
              <Mitgliedschaften 
                imgURL="images/t3.png"
                des1="Du bist mit einer"
                des2="Mietrechtsschutzversicherung "
                des3="für
                künftige Streitfälle abgesichert. Dazu
                berät dich dein Partneranwalt zu
                allen Problemen und sendet bis zu "
                des4="2
                offiziellen Schreiben"
                des5=" an deinen
                Vermieter oder Nachbarn."
                des6="*Gruppenvertrag mit einer Sperrfrist von 3
                Monaten. Selbstbeteiligung: €150.00."
                type={3} />
            </div>
          </div>
        </div>
        <div className="lbtn-sect">
        <Button type="primary" block className="IT-btn-1">
            JETZT UPGRADEN
        </Button>
        </div>
      </Card>
    </div>
  )
}
