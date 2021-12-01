import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Vermieter_Anschreiben } from "../../constants";
import { useLayout } from "../../contexts";

export default function Vermieter_Anschreiben() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Vermieter_Anschreiben())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Vermieter Anschreiben Page" />
    </div>
  )
}
