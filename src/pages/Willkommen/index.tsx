import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Willkommen } from "../../constants";
import { useLayout } from "../../contexts";

export default function Willkommen() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Willkommen())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Willkommen Page" />
    </div>
  )
}
