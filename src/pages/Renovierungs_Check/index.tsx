import React, { useEffect } from "react";
import { HeaderComponent } from "../../components";
import { ROUTES_Renovierungs_Check } from "../../constants";
import { useLayout } from "../../contexts";
import { useTypedSelector } from '../../hooks/useTypeSeletor';
interface Books {
    title: string;
    author: string;
  }
export default function Renovierungs_Check() {
    const { loading, error, books } = useTypedSelector(state =>state.books);
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
            <div>
                {
                    loading ? (
                    <div>Loading...</div>
                    ) : (
                        books.map((item:Books,index:number) => (
                        <div key={index}>
                            <p>
                            {item['title']}: {item['author']}
                            </p>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}
