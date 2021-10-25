import { Fragment } from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./utils/protectedRoute";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import AdminPage from "./pages/admin";
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
