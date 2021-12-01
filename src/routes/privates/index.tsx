/* eslint-disable react/jsx-curly-newline */
import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES_LOGIN } from '../../constants';
import { useLayout } from '../../contexts';

const PrivateRoute: FC<{path: string}> = ({ children, ...rest }) => {
  const layoutContext = useLayout();

  const { user } = layoutContext;
  
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !!user ? (
          children
        ) : (
          <Redirect to={{ pathname: ROUTES_LOGIN(), state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
