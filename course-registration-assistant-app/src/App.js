import React, { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import style from './App.scss';
import Group from './components/Group/Group';
import Login from "./containers/Login";
import PrivateRoute from './containers/PrivateRoute';
import PublicRoute from "./containers/PublicRoute";
import NotFound from "./containers/NotFoundPage";
import UserContext from './contexts/UserContext';
import UserService from "./services/UserService";

function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
      </header>
      <UserContext.Provider value={{ isUserLogin: UserService.isUserLogin }}>
        <BrowserRouter>
          <Switch>
            {/* Only logged in user can access */}
            <PrivateRoute exact path={["/", "dashboard"]} component={Group} />
            <PrivateRoute exact path={["/profile"]} component={Group} />
            {/* Only Not logged in user can access, logged in user can not*/}
            <PublicRoute isRestricted="true" path="/login" component={Login} />
            {/* everyboday can access */}
            <PublicRoute path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
    </UserContext.Provider>
    </div>
  );
}

export default App;
