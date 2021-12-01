import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Renovierungs_Check } from "../../constants";
import { useLayout } from "../../contexts";

export default function Renovierungs_Check() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Renovierungs_Check())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Renovierungs Check Page" />
    </div>
  )
}
