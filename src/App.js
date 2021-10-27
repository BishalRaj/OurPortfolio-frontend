import { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import AdminPage from "./pages/admin";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProtectedRoute from "./utils/protectedRoute";
function App() {
  const isLoggedIn = () => {
    return false;
  };

  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            title={"Our Portfolio"}
            path={"/"}
            exact={true}
            component={LoginPage}
          />
          <ProtectedRoute
            isLoggedIn={isLoggedIn}
            title={"Register"}
            path={"/register"}
            exact={true}
            component={RegisterPage}
          />
          <ProtectedRoute
            isLoggedIn={true}
            title={"Register"}
            path={"/admin"}
            exact={true}
            component={AdminPage}
          />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
