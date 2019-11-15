import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import { GlobalStyle } from "./../public/style/GlobalStyle";
import {
  AccountSetting,
  Listen,
  Login,
  Main,
  PasswordReset,
  PostDetail,
  Search,
  SignUp,
  UserPage
} from "./pages";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/accountSetting" component={AccountSetting} />
      <Route exact path={["/listener", "/listening"]} component={Listen} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Main} />
      <Route exact path="/passwordReset" component={PasswordReset} />
      <Route exact path="/post/:id" component={PostDetail} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/user" component={UserPage} />
    </Switch>
  </BrowserRouter>
);

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
