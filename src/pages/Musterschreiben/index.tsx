import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Musterschreiben } from "../../constants";
import { useLayout } from "../../contexts";

export default function Musterschreibe() {
  const layoutContext = useLayout();

  useEffect(() => {
    layoutContext.setNavigationSelected(ROUTES_Musterschreiben())

    return () => {
      layoutContext.setNavigationSelected('')
    }
}, []);

  return (
    <div>
      <HeaderComponent title="Musterschreibe Page" />
    </div>
  )
}
