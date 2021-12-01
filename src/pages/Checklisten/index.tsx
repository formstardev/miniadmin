import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Checklisten } from "../../constants";
import { useLayout } from "../../contexts";

export default function Checklisten() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Checklisten())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Checklisten Page" />
    </div>
  )
}
