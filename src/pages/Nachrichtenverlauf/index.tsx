import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Nachrichtenverlauf } from "../../constants";
import { useLayout } from "../../contexts";

export default function Nachrichtenverlauf() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Nachrichtenverlauf())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Nachrichtenverlauf Page" />
    </div>
  )
}
