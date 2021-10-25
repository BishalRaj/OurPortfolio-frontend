import React from "react";
import { Route } from "react-router";

const PrivateRoute = ({
  component: Component,
  exact,
  path,
  title,
  redirectTo,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} {...rest} />
        ) : (
          <Component {...props} {...rest} />
        )
      }
    />
  );
};

export default PrivateRoute;
