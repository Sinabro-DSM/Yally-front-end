import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => <div>App.tsx</div>;
import { GlobalStyle } from "./../public/style/GlobalStyle";

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
