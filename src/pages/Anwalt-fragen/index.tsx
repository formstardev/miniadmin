import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Anwalt_Fragen } from "../../constants";
import { useLayout } from "../../contexts";

export default function Anwalt_Fragen() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Anwalt_Fragen())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Anwalt Fragen Page" />
    </div>
  )
}
