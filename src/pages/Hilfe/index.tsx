import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Hilfe } from "../../constants";
import { useLayout } from "../../contexts";

export default function Hilfe() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Hilfe())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Hilfe Page" />
    </div>
  )
}
