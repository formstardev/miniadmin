
import React, {useEffect} from 'react';
import { HeaderComponent } from "../../components";
import { ROUTES_Willkommen } from "../../constants";
import { useLayout } from "../../contexts";
import { useDispatch } from 'react-redux';
import { bookActions } from '../../redux/actionCreators/books';
import {
  useQuery,
  gql
} from "@apollo/client";
interface Books {
  title: string;
  author: string;
}
function ExchangeRates() {
  const dispatch = useDispatch();
  const GET_BOOKS = gql`
    query GetBooks {
        books {
        title
        author
        }
    }
  `;
  const { loading, error, data } = useQuery(GET_BOOKS);
  dispatch(bookActions(loading,error,data))
  return (
    <div>
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          data.books.map((item:Books,index:number) => (
              <div key={index}>
                <p>
                  {item['title']}: {item['author']}
                </p>
              </div>
        )))
      }
    </div>
  );
}
function Willkommen() {
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
      <ExchangeRates />
    </div>
  )
}

export default Willkommen;